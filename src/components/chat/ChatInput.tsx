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
    <form onSubmit={handleSubmit} className="p-4 bg-base-100">
      <div className="flex gap-4">
        <label className="input flex-1 m-5 py-2 px-5 min-h-15 bg-base-200 border rounded-full shadow-lg">
          {/* <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg> */}
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
        {/* <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="input flex-1 p-2 bg-base-100 border border-base-300 rounded-lg focus:outline-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !message.trim()}
          className="btn btn-primary min-w-[100px]"
        >
          {isLoading ? "Sending..." : "Send"}
        </button> */}
      </div>
    </form>
  );
};

export default ChatInput;
