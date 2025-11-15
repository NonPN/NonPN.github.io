import type { Message } from "@/types/chat";
import Markdown from "react-markdown";

const ChatMessage = ({ content, isAI, timestamp }: Message) => {
  return (
    <div className={`chat ${isAI ? "chat-start" : "chat-end"} mb-4`}>
      <div
        className={`${isAI ? "chat-bubble" : "chat-bubble chat-bubble-primary"} wrap-break-word whitespace-pre-wrap`}
      >
        <Markdown>{content}</Markdown>
        <span className="mt-1 block text-xs opacity-70">{timestamp}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
