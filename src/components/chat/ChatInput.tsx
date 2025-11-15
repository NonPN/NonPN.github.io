import { useEffect, useRef, useState } from "react";

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  className?: string;
}

const ChatInput = ({
  onSendMessage,
  isLoading = false,
  className,
}: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [multipleLines, setMultipleLines] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !isLoading) {
        onSendMessage(message);
        setMessage("");
      }
    }
  };

  useEffect(() => {
    if (message.includes("\n") || message.length > 100) {
      setMultipleLines(true);
    } else {
      setMultipleLines(false);
    }

    // Refocus the textarea after sending a message
    ref.current?.focus();
  }, [message, isLoading]);

  return (
    <div className={`p-5 ${className || ""}`}>
      <div
        className={`bg-base-200 flex min-h-15 items-center gap-4 ${multipleLines ? "rounded-2xl" : "rounded-full"} p-5 shadow-lg inset-shadow-sm`}
      >
        <textarea
          ref={ref}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          className="textarea textarea-ghost min-h-6 grow resize-none leading-tight focus-within:bg-transparent focus:outline-none"
          rows={multipleLines ? 3 : 1}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
          autoFocus
        />
        <kbd className="kbd kbd-lg">⏎</kbd>
      </div>
    </div>
  );
};

export default ChatInput;
