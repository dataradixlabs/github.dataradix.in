import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './ui/Logo';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! How can I help you today?", isUser: false }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { text: message, isUser: true }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please contact us at hello@DataRadix.com",
        isUser: false
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[480px] bg-background border border-border z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-foreground">
              <div className="flex items-center gap-3">
                <Logo size={28} />
                <div>
                  <h3 className="font-display font-semibold text-sm text-background">DataRadix Support</h3>
                  <p className="text-xs text-background/60">We typically reply in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 border border-background/20 hover:bg-background/10 flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3 text-background" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-secondary">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 text-sm ${
                      msg.isUser
                        ? 'bg-foreground text-background border border-foreground'
                        : 'bg-background text-foreground border border-border'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-background">
              <div className="flex gap-0">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-secondary border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
                />
                <button
                  onClick={handleSend}
                  className="w-10 border border-l-0 border-border bg-foreground text-background hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 w-12 h-12 bg-foreground text-background border border-foreground flex items-center justify-center z-50 hover:bg-primary hover:border-primary transition-colors"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
      </motion.button>
    </>
  );
}
