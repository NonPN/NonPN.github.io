import { useEffect, useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatMessageList from "@/components/chat/ChatMessageList";
import ChatInput from "@/components/chat/ChatInput";
import type { Message } from "@/types/chat";
import { useChatStore } from "@/store/ChatStore";
import { RiMenuFold2Line } from "react-icons/ri";
import ChatAbout from "@/components/about/ChatAbout";

export const SIDE_BAR_DRAWER_ID = "chat-sidebar-drawer";

const Home = () => {
  const {
    chatSideBar,
    activeChatId,
    getActiveChat,
    setActiveChat,
    addMessage,
    createNewChat,
  } = useChatStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isNewChat, setIsNewChat] = useState(false);
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

    // Work around to ensure a chat exists
    const chatId = isNewChat
      ? createNewChat()
      : activeChatId || createNewChat();
    setActiveChat(chatId);
    addMessage(chatId, userMessage);
    setIsNewChat(false);

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
    setIsNewChat(true);
  };

  useEffect(() => {
    if (chatSideBar.length === 0) {
      setIsNewChat(true);
    } else if (
      !chatSideBar.some((c) => c.id === activeChatId) &&
      chatSideBar.length > 0
    ) {
      setActiveChat(chatSideBar[0].id);
    }
  }, [chatSideBar]);

  return (
    <div className="drawer lg:drawer-open">
      <input
        id={SIDE_BAR_DRAWER_ID}
        type="checkbox"
        className="drawer-toggle"
      />
      <ChatSidebar onNewChat={handleNewChat} />
      <div className="drawer-content flex h-screen flex-col">
        <div className="bg-base-200 border-base-300 flex h-15 gap-5 border-b p-4 shadow-sm">
          <label htmlFor={SIDE_BAR_DRAWER_ID} className="lg:hidden">
            <RiMenuFold2Line size={25} />
          </label>
          <h1 className="text-base-content text-xl font-semibold">
            AI Chat Assistant
          </h1>
        </div>
        {isNewChat ? (
          <>
            <ChatAbout onSendMessage={handleSendMessage} />
          </>
        ) : (
          <>
            <ChatMessageList messages={messages} />
            <ChatInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
