interface CaseStudyContentProps {
  content: string;
}

export default function CaseStudyContent({ content }: CaseStudyContentProps) {
  const renderText = (text: string) => {
    // Handle bold text **text** - improved regex to handle multiple bold sections
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the bold
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add the bold text
      parts.push(
        <strong key={match.index} className="font-semibold text-text-primary">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const renderContent = () => {
    const paragraphs = content.split("\n\n");
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < paragraphs.length) {
      const paragraph = paragraphs[i];
      const trimmed = paragraph.trim();

      if (!trimmed) {
        i++;
        continue;
      }

      // Headers
      if (trimmed.startsWith("# ")) {
        elements.push(
          <h2 key={i} className="text-h2 font-semibold text-text-primary mt-16 mb-8 first:mt-0">
            {trimmed.slice(2)}
          </h2>
        );
        i++;
        continue;
      }
      if (trimmed.startsWith("## ")) {
        elements.push(
          <h3 key={i} className="text-h3 font-semibold text-text-primary mt-12 mb-6">
            {trimmed.slice(3)}
          </h3>
        );
        i++;
        continue;
      }
      if (trimmed.startsWith("### ")) {
        elements.push(
          <h4 key={i} className="text-body font-semibold text-text-primary mt-8 mb-4">
            {trimmed.slice(4)}
          </h4>
        );
        i++;
        continue;
      }

      // Check if paragraph contains bold headers with lists (e.g., **1. Title** - item1 - item2)
      const boldHeaderPattern = /\*\*(\d+\.\s[^*]+)\*\*/g;
      const hasBoldHeaders = boldHeaderPattern.test(trimmed);
      
      if (hasBoldHeaders && trimmed.includes("- ")) {
        // Split by bold headers and process each section
        const sections: Array<{ type: 'text' | 'bold-header'; content: string }> = [];
        let lastIndex = 0;
        boldHeaderPattern.lastIndex = 0; // Reset regex
        
        let match: RegExpExecArray | null;
        while ((match = boldHeaderPattern.exec(trimmed)) !== null) {
          // Add text before the bold header
          if (match.index > lastIndex) {
            const beforeText = trimmed.substring(lastIndex, match.index).trim();
            if (beforeText) {
              sections.push({ type: 'text', content: beforeText });
            }
          }
          // Add the bold header section
          sections.push({ type: 'bold-header', content: match[1] });
          lastIndex = match.index + match[0].length;
        }
        // Add remaining text after last bold header
        if (lastIndex < trimmed.length) {
          const afterText = trimmed.substring(lastIndex).trim();
          if (afterText) {
            sections.push({ type: 'text', content: afterText });
          }
        }

        // Process each section
        const sectionElements: JSX.Element[] = [];
        sections.forEach((section, sectionIdx) => {
          if (section.type === 'bold-header') {
            sectionElements.push(
              <h4 key={`header-${sectionIdx}`} className="text-body font-semibold text-text-primary mt-4 sm:mt-6 mb-2 sm:mb-3 first:mt-0">
                {section.content}
              </h4>
            );
          } else {
            // Check if this section contains a list
            const lines = section.content.split('\n').map(l => l.trim()).filter(l => l);
            const listItems = lines.filter(line => line.startsWith('- '));
            const nonListText = lines.filter(line => !line.startsWith('- ')).join(' ');

            if (listItems.length > 0) {
              if (nonListText) {
                sectionElements.push(
                  <p key={`text-${sectionIdx}`} className="text-body text-text-secondary leading-relaxed mb-2 sm:mb-3">
                    {renderText(nonListText)}
                  </p>
                );
              }
              sectionElements.push(
                <ul key={`list-${sectionIdx}`} className="list-disc list-inside space-y-2 my-3 sm:my-4 text-text-secondary ml-3 sm:ml-4">
                  {listItems.map((item, itemIdx) => {
                    const text = item.slice(2).trim();
                    return (
                      <li key={itemIdx} className="leading-relaxed text-body">
                        {renderText(text)}
                      </li>
                    );
                  })}
                </ul>
              );
            } else if (nonListText) {
              sectionElements.push(
                  <p key={`text-${sectionIdx}`} className="text-body text-text-secondary leading-relaxed my-3 sm:my-4">
                  {renderText(nonListText)}
                </p>
              );
            }
          }
        });

        if (sectionElements.length > 0) {
          elements.push(
            <div key={i} className="my-6">
              {sectionElements}
            </div>
          );
          i++;
          continue;
        }
      }

      // Bold header (e.g., **1. Event-Driven Data Pipeline**)
      // Check if this paragraph contains a bold header with a list in the same paragraph
      if (trimmed.startsWith("**") && trimmed.includes("**")) {
        const boldEnd = trimmed.indexOf("**", 2);
        if (boldEnd > 0) {
          const boldText = trimmed.substring(2, boldEnd);
          const afterBold = trimmed.substring(boldEnd + 2).trim();

          // Check if this paragraph contains a list (same paragraph or next)
          const hasListInParagraph = afterBold.includes("\n- ") || afterBold.startsWith("- ");
          const nextParagraph = i + 1 < paragraphs.length ? paragraphs[i + 1].trim() : "";
          const isListNext = nextParagraph.startsWith("- ") || /^\d+\.\s/.test(nextParagraph);

          if (hasListInParagraph) {
            // Bold header with list in same paragraph
            const lines = afterBold.split("\n").map(l => l.trim()).filter(l => l);
            const listItems = lines.filter(line => line.startsWith("- "));
            const nonListText = lines.filter(line => !line.startsWith("- ")).join(' ');

            elements.push(
              <div key={i} className="my-6">
                <h4 className="text-body font-semibold text-text-primary mb-3">{boldText}</h4>
                {nonListText && (
                  <p className="text-body text-text-secondary leading-relaxed mb-3">
                    {renderText(nonListText)}
                  </p>
                )}
                {listItems.length > 0 && (
                  <ul className="list-disc list-inside space-y-2 my-4 text-text-secondary ml-4">
                    {listItems.map((item, itemIdx) => {
                      const text = item.slice(2).trim();
                      return (
                        <li key={itemIdx} className="leading-relaxed text-body">
                          {renderText(text)}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
            i++;
            continue;
          } else if (isListNext) {
            // Render bold header, then process the list in next iteration
            elements.push(
            <div key={i} className="my-4 sm:my-6">
              <h4 className="text-body font-semibold text-text-primary mb-2 sm:mb-3">{boldText}</h4>
              {afterBold && (
                <p className="text-body text-text-secondary leading-relaxed mb-2 sm:mb-3">
                  {renderText(afterBold)}
                </p>
              )}
            </div>
            );
            i++;
            // Continue to next iteration to process the list
            continue;
          } else if (afterBold) {
            // Bold header with inline content
            elements.push(
              <div key={i} className="my-6">
                <h4 className="text-body font-semibold text-text-primary mb-2">{boldText}</h4>
                <p className="text-body text-text-secondary leading-relaxed">
                  {renderText(afterBold)}
                </p>
              </div>
            );
            i++;
            continue;
          } else {
            // Just a bold paragraph
            elements.push(
              <p key={i} className="text-body font-semibold text-text-primary my-6">
                {boldText}
              </p>
            );
            i++;
            continue;
          }
        }
      }

      // Numbered lists (ordered lists)
      if (/^\d+\.\s/.test(trimmed) || (trimmed.includes("\n") && /^\d+\.\s/m.test(trimmed))) {
        const items = trimmed.split("\n").filter((item) => {
          const trimmedItem = item.trim();
          return /^\d+\.\s/.test(trimmedItem);
        });

        if (items.length > 0) {
          elements.push(
            <ol key={i} className="list-decimal list-inside space-y-2 sm:space-y-3 my-6 sm:my-8 text-text-secondary ml-3 sm:ml-4">
              {items.map((item, j) => {
                const text = item.replace(/^\d+\.\s/, "").trim();
                return (
                  <li key={j} className="leading-relaxed text-body">
                    {renderText(text)}
                  </li>
                );
              })}
            </ol>
          );
          i++;
          continue;
        }
      }

      // Unordered lists
      if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").filter((item) => item.trim().startsWith("- "));
        if (items.length > 0) {
          elements.push(
            <ul key={i} className="list-disc list-inside space-y-2 sm:space-y-3 my-6 sm:my-8 text-text-secondary ml-3 sm:ml-4">
              {items.map((item, j) => {
                const text = item.trim().slice(2).trim();
                return (
                  <li key={j} className="leading-relaxed text-body">
                    {renderText(text)}
                  </li>
                );
              })}
            </ul>
          );
          i++;
          continue;
        }
      }

      // Code blocks
      if (trimmed.startsWith("```")) {
        elements.push(
          <pre
            key={i}
            className="bg-text-primary text-bg-base p-4 sm:p-6 rounded-soft overflow-x-auto my-6 sm:my-8 border border-border"
          >
            <code className="text-small">{trimmed.split("\n").slice(1, -1).join("\n")}</code>
          </pre>
        );
        i++;
        continue;
      }

      // Regular paragraphs with inline bold support
      elements.push(
        <p key={i} className="text-body text-text-secondary leading-relaxed my-4 sm:my-6">
          {renderText(trimmed)}
        </p>
      );
      i++;
    }

    return elements;
  };

  return <div className="prose-custom prose-lg">{renderContent()}</div>;
}
