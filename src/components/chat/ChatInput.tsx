import { useEffect, useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSendMessage, isLoading = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [multipleLines, setMultipleLines] = useState(false);

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
    if (message.includes("\n")) {
      setMultipleLines(true);
    } else {
      setMultipleLines(false);
    }
  }, [message]);

  return (
    <div className="p-4">
      <div className="bg-base-200 flex min-h-15 items-center gap-4 rounded-full px-5 py-2 shadow-lg">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          className="textarea textarea-ghost min-h-6 grow resize-none leading-tight focus-within:bg-transparent focus:outline-none"
          rows={multipleLines ? 3 : 1}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
        />
        <kbd className="kbd kbd-lg">⏎</kbd>
      </div>
    </div>
  );
};

export default ChatInput;
