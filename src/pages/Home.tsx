import { useEffect, useState } from "react";
import ChatSidebar from "../components/chat/ChatSidebar";
import MessageList from "../components/chat/MessageList";
import ChatInput from "../components/chat/ChatInput";
import type { Message } from "@/types/chat";
import { useChatStore } from "@/store/ChatStore";

const SIDE_BAR_DRAWER_ID = "chat-sidebar-drawer";

const Home = () => {
  const {
    chats,
    activeChatId,
    getActiveChat,
    setActiveChat,
    addMessage,
    createNewChat,
  } = useChatStore();
  const [isLoading, setIsLoading] = useState(false);
  const messages = getActiveChat()?.messages || [];

  const handleSendMessage = async (content: string) => {
    setIsLoading(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isAI: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    const chatId = activeChatId || createNewChat();
    setActiveChat(chatId);
    addMessage(chatId, userMessage);

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
        addMessage(chatId, aiMessage);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    const chatId = createNewChat();
    setActiveChat(chatId);
  };

  return (
    <div className="flex h-screen bg-base-100">
      <ChatSidebar onNewChat={handleNewChat} />
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
