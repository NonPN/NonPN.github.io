import { type FormEvent, useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSendMessage, isLoading = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-base-100 p-4">
      <div className="flex gap-4">
        <label className="input bg-base-200 m-5 min-h-15 flex-1 rounded-full border px-5 py-2 shadow-lg">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
            className="grow"
            placeholder="Ask anything..."
          />
          <kbd className="kbd kbd-md">⏎</kbd>
        </label>
      </div>
    </form>
  );
};

export default ChatInput;
