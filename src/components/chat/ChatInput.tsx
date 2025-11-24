import { useEffect, useRef, useState } from "react";
import { FiChevronsUp } from "react-icons/fi";

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
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
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
        className={`bg-base-200 flex min-h-15 items-center gap-4 ${multipleLines ? "rounded-2xl" : "rounded-full"} p-3 shadow-lg inset-shadow-sm`}
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
        {/* <kbd className="kbd kbd-lg">⏎</kbd> */}
        <button
          className="btn btn-primary h-10 w-10 rounded-full p-0"
          disabled={message.length == 0}
          onClick={sendMessage}
        >
          <FiChevronsUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
