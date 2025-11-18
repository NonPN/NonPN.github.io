import type { Message } from "@/types/chat";
import type { ComponentProps } from "react";
import Markdown from "react-markdown";
import Me from "@/assets/me.jpeg";
import { Link } from "react-router-dom";

interface MarkdownLinkProps extends ComponentProps<"a"> {
  node?: any;
}

const MarkdownLink = ({ href, children }: MarkdownLinkProps) => {
  // Check if the link is internal (relative path) or external (absolute URL)
  const isInternalLink = href?.startsWith("/");

  if (isInternalLink) {
    return <Link to={href || ""}>{children}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

// TODO: Still need to improve styling for markdown content
const ChatMessage = ({
  content,
  isAI,
  timestamp,
  ref,
}: Message & { ref?: React.Ref<HTMLDivElement> }) => {
  return (
    <div ref={ref} className={`chat ${isAI ? "chat-start" : "chat-end"} mb-4`}>
      {isAI && (
        <>
          <div className="chat-image avatar hidden lg:block">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={Me} />
            </div>
          </div>
        </>
      )}
      <div className={`chat-bubble max-w-5/6 wrap-break-word`}>
        <div className="prose">
          <Markdown components={{ a: MarkdownLink }}>{content}</Markdown>
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
