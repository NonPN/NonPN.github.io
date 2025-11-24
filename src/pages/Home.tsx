import { useEffect } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatMessageList from "@/components/chat/ChatMessageList";
import ChatInput from "@/components/chat/ChatInput";
import type { Message } from "@/types/chat";
import { useChatStore } from "@/store/ChatStore";
import { RiMenuFold2Line } from "react-icons/ri";
import ChatAbout from "@/components/about/ChatAbout";
import { BsThreeDots } from "react-icons/bs";
import { NonPNAI } from "@/services";

export const SIDE_BAR_DRAWER_ID = "chat-sidebar-drawer";

const ai = new NonPNAI();

const Home = () => {
  const {
    chatSideBar,
    activeChatId,
    isNewChat,
    isLoading,
    getActiveChat,
    setActiveChat,
    setIsNewChat,
    setIsLoading,
    addMessage,
    createNewChat,
    deleteChat,
  } = useChatStore();
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
      // Simulating AI response
      const response = ai.generateAnswer(content);

      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
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
    if (window.innerWidth < 1024) {
      document.getElementById(SIDE_BAR_DRAWER_ID)?.click();
    }
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
        <div className="bg-base-200 border-base-300 flex h-20 items-center justify-between gap-5 border-b p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <label htmlFor={SIDE_BAR_DRAWER_ID} className="lg:hidden">
              <RiMenuFold2Line size={25} />
            </label>
            <h1 className="text-base-content text-xl font-semibold lg:pl-5">
              NonPN
            </h1>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="label hover:bg-base-300 m-1 rounded-sm p-2"
            >
              <BsThreeDots size={16} />
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-300 rounded-box shadow-base-200 z-20 w-35 p-2 shadow-lg inset-shadow-xs inset-shadow-gray-600"
            >
              <li>
                <label
                  onClick={(e) => {
                    e.preventDefault();
                    if (activeChatId) {
                      deleteChat(activeChatId);
                    }
                  }}
                  className="rounded-box flex items-center"
                >
                  <text className="flex-1">Delete</text>
                  <kbd className="kbd kbd-lg">␡</kbd>
                </label>
              </li>
            </ul>
          </div>
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
