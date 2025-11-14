import Message from "./Message";

interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="max-w-full flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <Message
          key={message.id}
          content={message.content}
          isAI={message.isAI}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default MessageList;
