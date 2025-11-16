import type { Chat, Message } from "@/types/chat";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

interface ChatStore {
  chats: Record<string, Chat>;
  chatSideBar: { id: string; title: string }[];
  activeChatId: string | null;
  isNewChat: boolean;
  getActiveChat: () => Chat | null;
  setActiveChat: (id: string | null) => void;
  setIsNewChat: (isNew: boolean) => void;
  createNewChat: () => string;
  deleteChat: (id: string) => void;
  addMessage: (chatId: string, msg: Message) => void;
}

export const useChatStore = create<ChatStore>()(
  persist<ChatStore>(
    (set, get) => ({
      chats: {},
      chatSideBar: [],
      activeChatId: null,
      isNewChat: true,
      getActiveChat: () => {
        const { chats, activeChatId } = get();
        return chats[activeChatId || ""] || null;
      },
      setActiveChat: (id) => set({ activeChatId: id }),
      setIsNewChat: (isNew: boolean) => set({ isNewChat: isNew }),
      createNewChat: () => {
        const chats = get().chats;
        const id = nanoid();
        const newChat: Chat = {
          id,
          title: "New Chat",
          messages: [],
          createdAt: Date.now(),
        };
        set({
          chats: {
            ...chats,
            [id]: newChat,
          },
          activeChatId: id,
          chatSideBar: [{ id, title: newChat.title }, ...get().chatSideBar],
        });
        return id;
      },
      deleteChat: (id: string) => {
        const chats = get().chats;
        const { [id]: _, ...rest } = chats;
        const chatSideBar = get().chatSideBar.filter((c) => c.id !== id);
        let newActiveChatId = get().activeChatId;
        if (newActiveChatId === id) {
          newActiveChatId = chatSideBar.length > 0 ? chatSideBar[0].id : null;
        }
        // TODO: Come back to this bug where deleting a chat does not update activeChatId properly
        set({
          chats: rest,
          chatSideBar,
          activeChatId: newActiveChatId,
        });
      },
      addMessage: (chatId, msg) => {
        const chats = get().chats;
        const chat = chats[chatId];
        const messages = chat.messages;
        const isFirstMessage = messages.length === 0;
        const title = isFirstMessage
          ? msg.content.slice(0, 20) + (msg.content.length > 20 ? "..." : "")
          : chat.title;

        // Update chat with new message and possibly new title
        if (chat) {
          const updatedChat: Chat = {
            ...chat,
            title,
            messages: [...chat.messages, msg],
          };
          set({
            chats: {
              ...chats,
              [chatId]: updatedChat,
            },
          });
        }

        // Update sidebar title if it's the first message
        if (isFirstMessage) {
          const chatSideBar = get().chatSideBar.map((c) =>
            c.id === chatId ? { ...c, title } : c,
          );
          set({ chatSideBar });
        }
      },
    }),
    { name: "chat-store" },
  ),
);
