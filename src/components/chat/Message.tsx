interface MessageProps {
  content: string;
  isAI: boolean;
  timestamp: string;
}

const Message = ({ content, isAI, timestamp }: MessageProps) => {
  return (
    <div className={`chat ${isAI ? "chat-start" : "chat-end"} mb-4`}>
      <div
        className={`${isAI ? "chat-bubble" : "chat-bubble chat-bubble-primary"} wrap-break-word whitespace-normal`}
      >
        <p className="text-sm md:text-base">{content}</p>
        <span className="mt-1 block text-xs opacity-70">{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
