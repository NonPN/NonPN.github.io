import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import type { Message } from "@/types/chat";

interface ChatMessageListProps {
  messages: Message[];
}

const ChatMessageList = ({ messages }: ChatMessageListProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-full flex-1 overflow-y-auto px-5 py-5 lg:px-10">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          id={message.id}
          content={message.content}
          isAI={message.isAI}
          timestamp={message.timestamp}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessageList;
