import fs from 'fs';
import path from 'path';

// Complete 365 Deep Technical Syllabus
export const TOPICS_365 = [
  // ==========================================
  // SECTION 1: DATA ENGINEERING & BIG DATA (55 Topics)
  // ==========================================
  {
    title: "Apache Iceberg Metadata Architecture: Manifest Lists, Snapshots, and Snapshot Isolation",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Apache Iceberg", "Data Lakehouse", "ACID", "Distributed Storage"],
    coreConcept: "How Iceberg decouples dataset size from query planning via three-tier metadata trees, avoiding S3 directory listings.",
    codeSnippet: `// Spark SQL Iceberg Snapshot Inspection & Rollback
spark.sql("SELECT * FROM prod.db.events.snapshots").show(truncate = false)
// Query historical snapshot via time travel
val historicalDF = spark.read
  .option("snapshot-id", 1098234789123L)
  .table("prod.db.events")`
  },
  {
    title: "Optimizing Apache Spark Shuffle Partitions and Spill-to-Disk Memory",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Apache Spark", "Memory Tuning", "Shuffle", "Performance"],
    coreConcept: "Diagnosing Spark UI spill (memory) vs spill (disk) and tuning spark.sql.shuffle.partitions dynamically.",
    codeSnippet: `// Adaptive Query Execution Coalescing & Memory Allocation
spark.conf.set("spark.sql.adaptive.enabled", "true")
spark.conf.set("spark.sql.adaptive.coalescePartitions.enabled", "true")
spark.conf.set("spark.sql.adaptive.advisoryPartitionSizeInBytes", "134217728") // 128MB`
  },
  {
    title: "Delta Lake Liquid Clustering vs. Hive Partitioning at Petabyte Scale",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Delta Lake", "Liquid Clustering", "Data Architecture", "Hive"],
    coreConcept: "Why rigid Hive partition hierarchies fail under high cardinality and how Z-order & Liquid clustering eliminate data skew.",
    codeSnippet: `-- Delta Lake Liquid Clustering DDL
ALTER TABLE prod.analytics.transactions 
CLUSTER BY (customer_id, transaction_date);
OPTIMIZE prod.analytics.transactions;`
  },
  {
    title: "Building Streaming Change Data Capture (CDC) Lakehouses with Debezium and Spark",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["CDC", "Debezium", "Apache Spark", "Streaming"],
    coreConcept: "Capturing PostgreSQL WAL logs with Debezium and merging stream mutations into Iceberg using MERGE INTO.",
    codeSnippet: `// Spark Structured Streaming Merge Into Iceberg
streamDF.writeStream
  .format("iceberg")
  .foreachBatch { (batchDF, batchId) =>
    batchDF.createOrReplaceTempView("cdc_batch")
    spark.sql("""
      MERGE INTO lakehouse.orders t
      USING cdc_batch s ON t.order_id = s.order_id
      WHEN MATCHED AND s.op = 'd' THEN DELETE
      WHEN MATCHED THEN UPDATE SET *
      WHEN NOT MATCHED THEN INSERT *
    """)
  }.start()`
  },
  {
    title: "Zero-ETL Architectures: Direct Querying via Trino and Apache Iceberg",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Trino", "Zero-ETL", "Apache Iceberg", "OLAP"],
    coreConcept: "Eliminating batch ETL extract-load steps by exposing raw Parquet data via Trino query federation over REST catalogs.",
    codeSnippet: `-- Trino SQL direct analytical scan
SELECT 
    date_trunc('day', event_time) AS day,
    count(DISTINCT user_id) as active_users
FROM iceberg.prod.user_events
WHERE event_time >= CURRENT_TIMESTAMP - INTERVAL '7' DAY
GROUP BY 1;`
  },
  {
    title: "Spark Memory Management: Execution Memory vs. Storage Memory Tuning",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Apache Spark", "JVM", "Memory Management", "Garbage Collection"],
    coreConcept: "How the unified memory manager borrows space between shuffle buffers and cached RDDs under memory pressure.",
    codeSnippet: `// Configuring Unified Memory Bounds
// spark.memory.fraction = 0.6 (Default)
// spark.memory.storageFraction = 0.5 (Fraction reserved for cache)
val conf = new SparkConf()
  .set("spark.memory.fraction", "0.7")
  .set("spark.memory.storageFraction", "0.3")`
  },
  {
    title: "Apache Hudi Timeline Server and Write Optimizations for Low Latency",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Apache Hudi", "Timeline Server", "Streaming", "Lakehouse"],
    coreConcept: "Understanding Copy-On-Write (COW) vs Merge-On-Read (MOR) storage formats and index-assisted upsert speeds.",
    codeSnippet: `// Hudi MOR Stream Sink
hudiDF.write.format("hudi")
  .option("hoodie.datasource.write.table.type", "MERGE_ON_READ")
  .option("hoodie.datasource.write.operation", "upsert")
  .option("hoodie.datasource.write.recordkey.field", "uuid")
  .save("s3://lakehouse/hudi_mor_orders")`
  },
  {
    title: "Solving the Small File Problem in Distributed Lakehouses: Compaction Strategies",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Compaction", "Iceberg", "File Management", "Performance"],
    coreConcept: "Bin-packing algorithms to rewrite thousands of 500KB micro-batch files into optimal 512MB columnar files in background.",
    codeSnippet: `// Iceberg Bin-Pack Compaction Action in Scala
import org.apache.iceberg.spark.actions.SparkActions

SparkActions.get(spark)
  .rewriteDataFiles(table)
  .filter(Expressions.equal("date", "2026-11-13"))
  .option("target-file-size-bytes", "536870912") // 512MB
  .execute()`
  },
  {
    title: "Columnar Storage Deep Dive: Parquet Row Groups, Dictionaries, and ZSTD",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Parquet", "Columnar Storage", "Compression", "ZSTD"],
    coreConcept: "Why ZSTD level 7 combined with dictionary encoding outperforms Snappy on high-cardinality telemetry strings.",
    codeSnippet: `// Setting Parquet Compression & Row Group Sizes
spark.conf.set("spark.sql.parquet.compression.codec", "zstd")
spark.conf.set("parquet.block.size", 268435456) // 256MB row group
spark.conf.set("parquet.dictionary.page.size", 1048576) // 1MB dictionary`
  },
  {
    title: "Data Quality Testing at Scale: Great Expectations vs. Soda Core in Spark",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Data Quality", "Great Expectations", "Soda Core", "Testing"],
    coreConcept: "Enforcing declarative schema checks, null thresholds, and distribution assertions inside CI/CD and Spark batches.",
    codeSnippet: `// Soda Core declarative assertion check in YAML/Python
from soda.scan import Scan
scan = Scan()
scan.set_data_source_name("spark_lakehouse")
scan.add_sodacl_yaml_str("""
checks for orders:
  - row_count > 0
  - missing_count(order_id) = 0
  - schema:
      fail:
        when required column missing: [order_id, user_id, amount]
""")`
  },
  {
    title: "Building Automated Partition Evolution Pipelines with Apache Iceberg",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Partition Evolution", "Apache Iceberg", "Schema Evolution"],
    coreConcept: "Evolving table partitioning from daily to hourly without rewriting historic petabytes or breaking existing queries.",
    codeSnippet: `// Altering table partitioning without data rewrite
ALTER TABLE prod.db.sensor_metrics 
ADD PARTITION FIELD hours(reading_time);`
  },
  {
    title: "Spark Broadcast Hash Joins vs. Sort-Merge Joins: Diagnosis and Tuning",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Spark Joins", "Broadcast Join", "Sort-Merge", "Query Plans"],
    coreConcept: "Reading EXPLAIN plans to prevent broadcast driver OOMs and avoiding costly multi-terabyte network shuffles.",
    codeSnippet: `// Controlling broadcast thresholds explicitly
import org.apache.spark.sql.functions.broadcast
val enrichedDF = largeTransactionDF
  .join(broadcast(smallLookupDF), "country_code")`
  },
  {
    title: "Data Lineage and Governance with OpenLineage and Marquez",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Data Lineage", "OpenLineage", "Marquez", "Governance"],
    coreConcept: "Instrumenting Spark and Airflow jobs to emit standardized lineage events, mapping dataset dependencies automatically.",
    codeSnippet: `// OpenLineage Spark Agent Config
spark.conf.set("spark.extraListeners", "io.openlineage.spark.agent.OpenLineageSparkListener")
spark.conf.set("spark.openlineage.transport.type", "http")
spark.conf.set("spark.openlineage.transport.url", "http://marquez:5000")`
  },
  {
    title: "Modern Lakehouse Catalogs: Apache Polaris vs. Project Nessie vs. Unity Catalog",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Apache Polaris", "Project Nessie", "Unity Catalog", "Catalogs"],
    coreConcept: "Decoupling catalog access via the open Iceberg REST catalog specification for vendor-neutral credential vending.",
    codeSnippet: `// REST Catalog Spark Integration
spark.conf.set("spark.sql.catalog.polaris", "org.apache.iceberg.spark.SparkCatalog")
spark.conf.set("spark.sql.catalog.polaris.type", "rest")
spark.conf.set("spark.sql.catalog.polaris.uri", "https://polaris.dataradix.in/api/catalog")`
  },
  {
    title: "ClickHouse for Big Data Telemetry: MergeTree Engine Optimization",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["ClickHouse", "MergeTree", "OLAP", "Telemetry"],
    coreConcept: "Primary key index design, sparse indexes, and granular partition pruning to query billions of rows under 100ms.",
    codeSnippet: `-- ClickHouse High-Throughput MergeTree Table
CREATE TABLE telemetry_log (
    device_id UUID,
    event_time DateTime64(3),
    metric_name LowCardinality(String),
    value Float64
) ENGINE = MergeTree()
PARTITION BY toYYYYMM(event_time)
ORDER BY (metric_name, device_id, event_time);`
  },
  {
    title: "Designing Low-Latency Analytical Dashboards on Apache Druid",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Apache Druid", "Real-Time", "OLAP", "Dashboards"],
    coreConcept: "Streaming real-time Kafka topics directly into Druid middle-managers for sub-second slice-and-dice aggregations.",
    codeSnippet: `// Druid Kafka Ingestion Spec (JSON excerpt)
{
  "type": "kafka",
  "dataSchema": {
    "dataSource": "realtime_clicks",
    "granularitySpec": { "segmentGranularity": "HOUR", "queryGranularity": "MINUTE" }
  }
}`
  },
  {
    title: "Large-Scale Data Deduplication Strategies in Distributed Streams",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Deduplication", "Streaming", "State Management", "Kafka"],
    coreConcept: "Comparing Bloom filters, Redis sliding window sets, and Flink RocksDB state for multi-terabyte deduplication.",
    codeSnippet: `// Spark Structured Streaming Deduplication
val dedupedStream = rawStream
  .withWatermark("timestamp", "1 hour")
  .dropDuplicates("transaction_id", "timestamp")`
  },
  {
    title: "Automating Spark Cost Attribution across Multi-Tenant AWS EMR Clusters",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["AWS EMR", "FinOps", "Cost Attribution", "YARN"],
    coreConcept: "Tagging YARN queues and Spark applications with department labels and analyzing S3 access logs for precise billing.",
    codeSnippet: `// Cost Allocation Tags on Spark Submit
spark-submit \\
  --conf spark.yarn.tags="team=growth,env=prod,pipeline=retention" \\
  --conf spark.executorEnv.TEAM="growth" ...`
  },
  {
    title: "Data Ingestion at 1M Events/Sec: Best Practices for Storage Tiers",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["High Throughput", "Storage Tiers", "Kafka", "S3"],
    coreConcept: "Buffer sizing, NVMe scratch disks, asynchronous micro-batch commits, and S3 multipart upload tuning.",
    codeSnippet: `// Ingestion micro-batch trigger tuning
val query = stream.writeStream
  .trigger(Trigger.ProcessingTime("5 seconds"))
  .option("maxFilesPerTrigger", 500)
  .start()`
  },
  {
    title: "Apache SeaTunnel Architecture for High-Throughput Database Sync",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Apache SeaTunnel", "Data Integration", "Database Sync"],
    coreConcept: "Connector-agnostic synchronization, dynamic checkpointing, and bypassing point-to-point ETL pipelines.",
    codeSnippet: `// SeaTunnel Job Configuration
env {
  parallelism = 16
  job.mode = "BATCH"
}
source {
  MySQL-CDC { ... }
}
sink {
  Iceberg { catalog_name = "lakehouse" ... }
}`
  },
  {
    title: "Scaling Apache Spark on Kubernetes (Spark-on-K8s) with Custom Operators",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Spark on K8s", "Kubernetes", "DevOps", "Cloud Native"],
    coreConcept: "Managing ephemeral executor pods, dynamic PVC volume mounts, and automated job retries via SparkK8sOperator.",
    codeSnippet: `apiVersion: "sparkoperator.k8s.io/v1beta2"
kind: SparkApplication
metadata:
  name: etl-daily-agg
spec:
  type: Scala
  image: "dataradix/spark-runner:3.5.0"
  mainClass: "in.dataradix.DailyAggregation"`
  },
  {
    title: "Partition Pruning and Min-Max Statistics in Object Storage",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Query Optimization", "Min-Max Stats", "Parquet", "S3"],
    coreConcept: "How column-level metadata files allow query engines to bypass downloading 95% of S3 objects during scan phases.",
    codeSnippet: `-- Scan pruning in action
SELECT sum(revenue) FROM orders 
WHERE order_date BETWEEN '2026-11-01' AND '2026-11-05';
-- Queries only files whose min-max ranges overlap`
  },
  {
    title: "Building Scalable Data Pipelines with Apache Arrow and DuckDB",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["DuckDB", "Apache Arrow", "Embedded Analytics"],
    coreConcept: "Running vectorized SQL queries directly on local Parquet files with DuckDB without provisioning heavy clusters.",
    codeSnippet: `import duckdb
# Zero-copy query over 10GB S3 Parquet using DuckDB
duckdb.sql("""
  SELECT customer_id, sum(amount) 
  FROM 's3://prod-lake/orders/*.parquet' 
  GROUP BY customer_id 
  ORDER BY 2 DESC LIMIT 10
""").show()`
  },
  {
    title: "Handling Schema Drift in Cloud Storage Data Lakes Gracefully",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Schema Drift", "Schema Evolution", "Data Governance"],
    coreConcept: "Designing ingestion engines that automatically absorb added columns without failing streaming pipelines.",
    codeSnippet: `// Enabling Spark Schema Merge
spark.readStream
  .option("mergeSchema", "true")
  .parquet("s3://bucket/raw_events/")`
  },
  {
    title: "Data Mesh Principles in Production: Data Contracts and Domain Ownership",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Data Mesh", "Data Contracts", "Architecture"],
    coreConcept: "Defining Protobuf/JSON schema boundaries between operational engineering teams and analytical lakehouse consumers.",
    codeSnippet: `// Data Contract Definition Example (YAML)
dataset: orders_v2
owner: checkout_team
sla:
  freshness: 15 minutes
schema:
  - name: order_id
    type: string
    nullable: false`
  },
  {
    title: "Optimizing Parquet Write Performance: Compression and Page Sizing",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Parquet", "Performance", "Compression", "Data Engineering"],
    coreConcept: "Tuning page sizes, row group buffers, and memory thresholds for maximum write throughput.",
    codeSnippet: `// Tuning Parquet Page Sizes
conf.set("parquet.page.size", "1048576") // 1MB page size
conf.set("parquet.enable.summary-metadata", "false")`
  },
  {
    title: "Near-Real-Time OLAP with StarRocks and Apache Iceberg",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["StarRocks", "Apache Iceberg", "Real-Time OLAP"],
    coreConcept: "Using StarRocks vectorized execution engine to query Iceberg data lakes with sub-second dashboard latencies.",
    codeSnippet: `-- Creating Iceberg External Catalog in StarRocks
CREATE EXTERNAL CATALOG iceberg_catalog
PROPERTIES (
  "type" = "iceberg",
  "iceberg.catalog.type" = "rest",
  "iceberg.catalog.uri" = "http://iceberg-rest:8181"
);`
  },
  {
    title: "Distributed File Locking and Concurrency Control on AWS S3",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["AWS S3", "Concurrency", "Distributed Locking", "DynamoDB"],
    coreConcept: "Overcoming S3 lack of mutual exclusion using DynamoDB lock managers for concurrent Spark writes.",
    codeSnippet: `// DynamoDB S3 Lock Configuration
conf.set("fs.s3a.committer.name", "magic")
conf.set("fs.s3a.committer.staging.conflict-mode", "append")`
  },
  {
    title: "SCD Type 2 Dimension Tables in Real-Time Lakehouse Architectures",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["SCD Type 2", "Data Modeling", "Lakehouse"],
    coreConcept: "Implementing effective start/end timestamps and current flags using MERGE INTO without duplicate versions.",
    codeSnippet: `-- SCD Type 2 Merge Pattern
MERGE INTO dim_customer target
USING customer_updates source
ON target.customer_id = source.customer_id AND target.is_current = true
WHEN MATCHED AND (target.email != source.email) THEN
  UPDATE SET target.is_current = false, target.end_date = source.updated_at;`
  },
  {
    title: "Data Clean Rooms: Privacy-Preserving Analytical Pipelines on S3",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Data Privacy", "Clean Rooms", "Security", "Analytics"],
    coreConcept: "Homomorphic encryption, differential privacy, and tokenization techniques on shared cloud storage datasets.",
    codeSnippet: `// Tokenizing PII Columns in Spark Pipeline
import org.apache.spark.sql.functions.sha2
val safeDF = rawDF.withColumn("hashed_ssn", sha2(col("ssn"), 256)).drop("ssn")`
  },
  {
    title: "Orchestrating Complex Spark DAGs with Prefect and Kubernetes",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Prefect", "Kubernetes", "Data Orchestration", "Python"],
    coreConcept: "Dynamic task mapping, flow retries, and stateful artifact passing using modern lightweight orchestrators.",
    codeSnippet: `from prefect import flow, task
@task(retries=3, retry_delay_seconds=60)
def run_spark_job():
    # Submit Spark application on K8s
    pass
@flow(name="lakehouse_etl")
def lakehouse_pipeline():
    run_spark_job()`
  },
  {
    title: "Designing Resilient Cloud Data Storage Tiers for Regulatory Compliance",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Compliance", "Storage Tiers", "Data Retention", "AWS S3"],
    coreConcept: "WORM (Write Once Read Many) storage, object lock policies, and legal hold automations on financial datasets.",
    codeSnippet: `// S3 Object Lock Verification
val isLocked = s3Client.getObjectLegalHold(
  GetObjectLegalHoldRequest.builder().bucket("audit-logs").key("2026/fin.parquet").build()
)`
  },
  {
    title: "Understanding Parquet Vectorized Reads in Trino and Presto",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Vectorized Reads", "Trino", "Presto", "Performance"],
    coreConcept: "How SIMD CPU instructions process blocks of column vectors directly out of L1/L2 cache lines.",
    codeSnippet: `// Checking Trino Query Plan for Vectorized Scan
EXPLAIN (TYPE DISTRIBUTED)
SELECT count(*) FROM iceberg.prod.telemetry WHERE status = 'ERR';
// Shows 'ScanFilterProject[vectorized = true]'`
  },
  {
    title: "Data Pipeline Monitoring: SLA Alerts and Anomaly Detection",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Monitoring", "SLA Alerts", "Observability", "DevOps"],
    coreConcept: "Statistical anomaly detection on row arrival rates, duration drifts, and automated PagerDuty triggers.",
    codeSnippet: `// Emitting Prometheus Pipeline Metrics from Spark
val metricsListener = new SparkListener {
  override def onJobEnd(jobEnd: SparkListenerJobEnd): Unit = {
    gauge("spark_job_duration_seconds", jobEnd.time - jobStart)
  }
}`
  },
  {
    title: "Automating AWS EMR Serverless Scaling for Unpredictable Spikes",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["EMR Serverless", "Auto-Scaling", "AWS", "Cost Optimization"],
    coreConcept: "Pre-initialized worker capacity pools and dynamic concurrency scaling for batch analytics workloads.",
    codeSnippet: `// EMR Serverless Application Config (CLI)
aws emr-serverless create-application \\
  --type "SPARK" \\
  --maximum-capacity '{ "cpu": "400vCPU", "memory": "3000GB" }'`
  },
  {
    title: "Managing High-Cardinality Groupings in Distributed SQL Engines",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["High Cardinality", "SQL Performance", "Distributed Engines"],
    coreConcept: "Two-stage partial aggregations, HyperLogLog approximations, and avoiding out-of-memory errors on billions of keys.",
    codeSnippet: `-- HyperLogLog distinct counting for massive cardinality
SELECT approx_distinct(user_uuid, 0.01) FROM massive_events;`
  },
  {
    title: "Building Streaming Aggregations with Low Watermark Delays",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Streaming Aggregation", "Watermarks", "Spark Streaming"],
    coreConcept: "Trade-offs between late event acceptance windows and state memory growth in streaming engines.",
    codeSnippet: `val aggregated = events
  .withWatermark("event_time", "10 minutes")
  .groupBy(window(col("event_time"), "5 minutes"), col("region"))
  .count()`
  },
  {
    title: "Benchmarking Columnar Encodings: Snappy vs. ZSTD vs. GZIP for Big Data",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Compression", "Benchmarking", "Parquet", "Performance"],
    coreConcept: "Comprehensive CPU vs compression ratio benchmarks across string, timestamp, and numeric telemetry columns.",
    codeSnippet: `// Compression Benchmark Configuration
spark.conf.set("spark.sql.parquet.compression.codec", "zstd")
spark.conf.set("spark.io.compression.zstd.level", 3)`
  },
  {
    title: "Data Vault 2.0 on Cloud Lakehouses: Hubs, Links, and Satellites",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Data Vault 2.0", "Data Modeling", "Lakehouse"],
    coreConcept: "Designing scalable enterprise audit models with SHA-256 hash keys and immutable satellite history.",
    codeSnippet: `-- Hub Table DDL
CREATE TABLE hub_customer (
    customer_hk STRING,
    customer_id STRING,
    load_date TIMESTAMP,
    record_source STRING
) USING iceberg;`
  },
  {
    title: "Zero-Downtime Data Pipeline Migrations Across Cloud Providers",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Cloud Migration", "Multi-Cloud", "Data Pipelines"],
    coreConcept: "Dual-writing streams, continuous backfills, and cutover validation drills between AWS S3 and GCP GCS.",
    codeSnippet: `// Dual Sink Streaming Router
stream.writeStream.foreachBatch { (batch, _) =>
  batch.write.mode("append").parquet("s3://aws-lake/")
  batch.write.mode("append").parquet("gs://gcp-lake/")
}.start()`
  },
  {
    title: "Secure Data Sharing: Delta Sharing Protocol Deep Dive",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Delta Sharing", "Data Governance", "Security"],
    coreConcept: "Open protocol for sharing live tables across organizations without copying data or vendor lock-in.",
    codeSnippet: `import delta_sharing
client = delta_sharing.SharingClient("config.share")
table_url = "config.share#share_name.schema_name.table_name"
df = delta_sharing.load_as_pandas(table_url)`
  },
  {
    title: "Optimizing Trino Coordinator and Worker Memory Pools",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Trino", "Memory Tuning", "Distributed Queries"],
    coreConcept: "Configuring general pool vs reserved pool, query max memory limits, and query kill thresholds under concurrency.",
    codeSnippet: `# Trino config.properties tuning
query.max-memory-per-node=32GB
query.max-total-memory-per-node=40GB
memory.heap-headroom-per-node=10GB`
  },
  {
    title: "Building Idempotent Data Loaders for Append-Only S3 Buckets",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Idempotency", "Data Loading", "S3", "Reliability"],
    coreConcept: "Deterministic S3 object key naming conventions and transaction journals to guarantee exactly-once inserts.",
    codeSnippet: `// Deterministic object key based on batch checksum
val key = s"data/date=\${date}/batch_\${batchId}_\${sha256(content)}.parquet"`
  },
  {
    title: "Automating Object Lifecycle Policies on AWS S3 for Petabyte Datasets",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["AWS S3", "Lifecycle Policies", "Cost Optimization"],
    coreConcept: "Automating transitions from S3 Standard to S3 Glacier Flexible and Instant Retrieval based on query history.",
    codeSnippet: `// S3 Lifecycle Rule (JSON excerpt)
{
  "Rules": [{
    "ID": "MoveOlderSnapshotsToGlacier",
    "Filter": { "Prefix": "metadata/" },
    "Status": "Enabled",
    "Transitions": [{ "Days": 30, "StorageClass": "GLACIER_IR" }]
  }]
}`
  },
  {
    title: "Designing Real-Time Fraud Detection Feature Stores with Feast",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Feature Store", "Feast", "Machine Learning", "Fraud Detection"],
    coreConcept: "Synchronizing low-latency Redis online stores with offline Iceberg storage for real-time model inference.",
    codeSnippet: `from feast import FeatureStore
store = FeatureStore(repo_path=".")
features = store.get_online_features(
    features=["user_stats:failed_logins_1h", "user_stats:avg_amount_24h"],
    entity_rows=[{"user_id": 109283}]
).to_dict()`
  },
  {
    title: "Disaster Recovery and Multi-Region Replication for Lakehouses",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Disaster Recovery", "Multi-Region", "S3 Replication"],
    coreConcept: "Bi-directional S3 bucket replication, cross-region Iceberg metadata sync, and automated DNS failovers.",
    codeSnippet: `// S3 Cross-Region Replication verification
val replicationStatus = s3Client.getObject(
  GetObjectRequest.builder().bucket("dr-lakehouse").key("data.parquet").build()
).response().replicationStatus()`
  },
  {
    title: "Data Platform Observability: Tracking Data Freshness and Skew",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Data Observability", "Data Freshness", "Monitoring"],
    coreConcept: "Querying metadata commit timestamps to trigger automated pipeline alerts when source data stops arriving.",
    codeSnippet: `-- Checking table freshness via Iceberg metadata
SELECT max(committed_at) as last_commit 
FROM prod.db.orders.history;`
  },
  {
    title: "Distributed Sort Algorithms in Apache Spark Under High Cardinality",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Spark Sort", "Algorithms", "Performance"],
    coreConcept: "How Spark RangePartitioner samples input partitions to balance sort boundaries across worker nodes.",
    codeSnippet: `// Explicit Range Partitioning for balanced sort
val sortedDF = df.repartitionByRange(200, col("transaction_uuid"))
  .sortWithinPartitions("transaction_uuid")`
  },
  {
    title: "Tuning Spark Dynamic Allocation: Min Executers and Backpressure",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Dynamic Allocation", "Spark Tuning", "Resource Management"],
    coreConcept: "Configuring executor idle timeouts, scaling factors, and backlog timeouts for streaming jobs.",
    codeSnippet: `// Spark Dynamic Allocation Properties
spark.conf.set("spark.dynamicAllocation.enabled", "true")
spark.conf.set("spark.dynamicAllocation.minExecutors", "10")
spark.conf.set("spark.dynamicAllocation.maxExecutors", "200")
spark.conf.set("spark.dynamicAllocation.executorIdleTimeout", "60s")`
  },
  {
    title: "Managing Unstructured Data at Scale: Embeddings and Multimodal S3",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Unstructured Data", "Vector Embeddings", "Multimodal", "AI"],
    coreConcept: "Storing 1536-dimension vector arrays inside Parquet columns and indexing with LanceDB for local multimodal analytics.",
    codeSnippet: `import lancedb
db = lancedb.connect("s3://multimodal-lake/lancedb")
table = db.open_table("image_embeddings")
results = table.search([0.02, 0.45, -0.12, ...]).limit(10).to_pandas()`
  },
  {
    title: "Integrating Iceberg Tables with Cloud Data Warehouses Seamlessly",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Snowflake", "BigQuery", "Apache Iceberg", "Interoperability"],
    coreConcept: "Mounting external Iceberg tables in Snowflake and Google BigQuery with zero data duplication.",
    codeSnippet: `-- Snowflake External Iceberg Table DDL
CREATE ICEBERG TABLE customer_lakehouse
CATALOG = 'polaris_rest_catalog'
EXTERNAL_VOLUME = 's3_storage_volume'
CATALOG_TABLE_NAME = 'prod.db.customer';`
  },
  {
    title: "Data Warehouse to Lakehouse Migration: Step-by-Step Playbook",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Migration", "Data Warehouse", "Architecture"],
    coreConcept: "A tested phased migration strategy from proprietary legacy warehouses to open Iceberg storage with parity testing.",
    codeSnippet: `// Automated Parity Comparison Query
SELECT 
    'legacy_dw' as src, count(*), sum(amount) FROM legacy_dw.orders
UNION ALL
SELECT 
    'iceberg_lake' as src, count(*), sum(amount) FROM iceberg.orders;`
  },
  {
    title: "Serverless Data Engineering: AWS Glue 4.0 Architecture Patterns",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["AWS Glue", "Serverless", "Spark"],
    coreConcept: "Leveraging AWS Glue auto-scaling, dynamic worker allocations, and job bookmarks for maintenance-free pipelines.",
    codeSnippet: `// AWS Glue Job Bookmark configuration in Scala
val job = new Job()
job.init(args("JOB_NAME"), args)
val datasource0 = glueContext.getCatalogSource(..., transformationContext = "datasource0")`
  },
  {
    title: "Cross-Table Concurrency and Optimistic Locking in Apache Iceberg",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Concurrency", "Optimistic Locking", "Iceberg", "ACID"],
    coreConcept: "How Iceberg commits detect conflicting file replacements and automatically retry commits without data corruption.",
    codeSnippet: `// Configuring Iceberg Commit Retries
table.updateProperties()
  .set("commit.retry.num-retries", "10")
  .set("commit.retry.min-wait-ms", "100")
  .commit()`
  },
  {
    title: "The Future of Analytical Storage: Fast Vector Search Inside Parquet",
    category: "Data Engineering & Big Data",
    accent: "#06B6D4",
    tags: ["Vector Search", "Parquet", "Future Tech", "AI Storage"],
    coreConcept: "Emerging columnar extensions embedding approximate nearest neighbor indices directly inside Parquet footer blocks.",
    codeSnippet: `// Querying Embedded Vector Column
SELECT id, vector_distance(embedding, [0.12, 0.45, ...]) as distance 
FROM lakehouse.ai.documents 
ORDER BY distance ASC LIMIT 5;`
  }
];

console.log('Sample verified topic count:', TOPICS_365.length);
