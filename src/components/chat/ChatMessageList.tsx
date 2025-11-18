import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import type { Message } from "@/types/chat";
import { useChatStore } from "@/store/ChatStore";

interface ChatMessageListProps {
  messages: Message[];
}

const ChatMessageList = ({ messages }: ChatMessageListProps) => {
  const { activeChatId } = useChatStore();
  const lastMsgRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useChatStore();

  useEffect(() => {
    // if (messages[messages.length - 1].isAI) {
    //   lastMsgRef.current?.scrollIntoView({ behavior: "auto" });
    // } else {
    //   bottomRef.current?.scrollIntoView({ behavior: "auto" });
    // }
    bottomRef.current?.scrollIntoView({
      behavior: "instant",
    });
  }, [activeChatId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="max-w-full flex-1 overflow-y-auto px-5 py-5 lg:px-10">
      {messages.map((message, index) => {
        return index == messages.length - 1 ? (
          <ChatMessage
            ref={undefined}
            key={message.id}
            id={message.id}
            content={message.content}
            isAI={message.isAI}
            timestamp={message.timestamp}
          />
        ) : (
          <ChatMessage
            ref={lastMsgRef}
            key={message.id}
            id={message.id}
            content={message.content}
            isAI={message.isAI}
            timestamp={message.timestamp}
          />
        );
      })}
      {isLoading && (
        <span className="skeleton skeleton-text pl-3">
          NonPN AI is thinking...
        </span>
      )}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessageList;
