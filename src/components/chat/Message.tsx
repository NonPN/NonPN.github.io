interface MessageProps {
  content: string;
  isAI: boolean;
  timestamp: string;
}

const Message = ({ content, isAI, timestamp }: MessageProps) => {
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg p-4 ${
          isAI ? "chat-bubble" : "chat-bubble-primary"
        }`}
      >
        <p className="text-sm md:text-base">{content}</p>
        <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
