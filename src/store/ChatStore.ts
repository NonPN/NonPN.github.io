import type { Chat, Message } from "@/types/chat";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

interface ChatStore {
  chats: Record<string, Chat>;
  chatSideBar: { id: string; title: string }[];
  activeChatId: string | null;
  getActiveChat: () => Chat | null;
  setActiveChat: (id: string) => void;
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
      getActiveChat: () => {
        const { chats, activeChatId } = get();
        return chats[activeChatId || ""] || null;
      },
      setActiveChat: (id) => set({ activeChatId: id }),
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
        let activeChatId = get().activeChatId;
        if (activeChatId === id) {
          activeChatId = chatSideBar.length > 0 ? chatSideBar[0].id : null;
        }
        set({
          chats: rest,
          chatSideBar,
          activeChatId,
        });
      },
      addMessage: (chatId, msg) => {
        const chats = get().chats;
        const chat = chats[chatId];
        if (chat) {
          const updatedChat: Chat = {
            ...chat,
            messages: [...chat.messages, msg],
          };
          set({
            chats: {
              ...chats,
              [chatId]: updatedChat,
            },
          });
        }
      },
    }),
    { name: "chat-store" }
  )
);
