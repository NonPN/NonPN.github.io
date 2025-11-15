import ChatMessage from "./ChatMessage";
import type { Message } from "@/types/chat";

interface ChatMessageListProps {
  messages: Message[];
}

const ChatMessageList = ({ messages }: ChatMessageListProps) => {
  return (
    <div className="max-w-full flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          id={message.id}
          content={message.content}
          isAI={message.isAI}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default ChatMessageList;
