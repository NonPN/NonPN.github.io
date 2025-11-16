import type { Message } from "@/types/chat";
import Markdown from "react-markdown";
import Me from "@/assets/me.jpeg";

// TODO: Still need to improve styling for markdown content
const ChatMessage = ({ content, isAI, timestamp }: Message) => {
  return (
    <div className={`chat ${isAI ? "chat-start" : "chat-end"} mb-4`}>
      {isAI && (
        <>
          <div className="chat-image avatar hidden lg:block">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={Me} />
            </div>
          </div>
        </>
      )}
      <div
        className={`chat-bubble max-w-3/4 wrap-break-word whitespace-pre-wrap`}
      >
        <div className="prose">
          <Markdown>{content}</Markdown>
          {isAI ? (
            <div className="flex items-center gap-2 text-xs">
              <div>NonPN - 🤖</div>
              <span className="block opacity-70">{timestamp}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="status status-primary"></span>
              <span className="block text-xs opacity-70">{timestamp}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
