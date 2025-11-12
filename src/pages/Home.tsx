import { useState } from "react";
import ChatSidebar from "../components/chat/ChatSidebar";
import MessageList from "../components/chat/MessageList";
import ChatInput from "../components/chat/ChatInput";

interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: string;
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([
    { id: "1", title: "First Chat" },
  ]);
  const [activeConversationId, setActiveConversationId] = useState("1");

  const handleSendMessage = async (content: string) => {
    setIsLoading(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isAI: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      // TODO: Implement AI response logic here
      // Simulating AI response
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "This is a simulated AI response.",
          isAI: true,
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    const newId = (conversations.length + 1).toString();
    setConversations((prev) => [
      ...prev,
      { id: newId, title: `New Chat ${newId}` },
    ]);
    setActiveConversationId(newId);
    setMessages([]);
  };

  return (
    <div className="flex h-screen bg-base-100">
      <ChatSidebar
        onNewChat={handleNewChat}
        conversations={conversations}
        activeConversationId={activeConversationId}
        onSelectConversation={setActiveConversationId}
      />
      <div className="flex-1 flex flex-col">
        <div className="bg-base-200 shadow-sm p-4 border-b border-base-300">
          <h1 className="text-xl text-base-content font-semibold">
            AI Chat Assistant
          </h1>
        </div>
        <MessageList messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
