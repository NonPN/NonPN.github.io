import { SIDE_BAR_DRAWER_ID } from "@/pages/Home";
import AboutCard from "@/components/about/AboutCard";
import { useChatStore } from "@/store/ChatStore";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import { RiChatNewLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useEffect } from "react";

interface ChatSidebarProps {
  onNewChat: () => void;
}

const ChatSidebar = ({ onNewChat }: ChatSidebarProps) => {
  const {
    chatSideBar,
    activeChatId,
    isNewChat,
    setActiveChat,
    setIsNewChat,
    deleteChat,
  } = useChatStore();

  const onSelectChat = (id: string) => {
    setActiveChat(id);
    setIsNewChat(false);
  };

  useEffect(() => {
    if (isNewChat) {
      setActiveChat(null);
    }
  }, [isNewChat]);

  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor={SIDE_BAR_DRAWER_ID}
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 flex min-h-full flex-col items-start">
        <div className="flex h-15 w-full flex-row-reverse items-center">
          <label
            htmlFor={SIDE_BAR_DRAWER_ID}
            aria-label="open sidebar"
            className="btn btn-square btn-ghost hover:bg-base-300 is-drawer-close:w-full is-drawer-close:rounded-none is-drawer-open:m-2"
          >
            <TbLayoutSidebarLeftExpand
              className="is-drawer-open:hidden"
              size={22}
            />
            <TbLayoutSidebarRightExpand
              className="is-drawer-close:hidden"
              size={22}
            />
          </label>
        </div>
        <div className="is-drawer-close:px-2 w-full px-3 pt-2">
          <button
            onClick={onNewChat}
            className="btn btn-primary is-drawer-close:p-0 w-full"
          >
            <text className="is-drawer-close:hidden">New Chat</text>
            <RiChatNewLine
              className="is-drawer-open:ml-2 is-drawer-close:size-4"
              size={20}
            />
          </button>
          <AboutCard />
        </div>
        <ul className="menu w-full grow px-3">
          <text className="is-drawer-close:hidden px-4 py-2 opacity-50">
            Chats
          </text>
          {chatSideBar.map(({ id, title }) => (
            <div
              key={id}
              onClick={() => onSelectChat(id)}
              className={`group is-drawer-close:hidden mb-2 flex cursor-pointer items-center rounded-lg p-2 ${
                activeChatId === id ? "bg-gray-600" : "hover:bg-gray-700"
              }`}
            >
              <span className="flex-1">{title}</span>
              <div
                className="dropdown dropdown-bottom dropdown-end"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="label hover:bg-base-100 invisible m-1 rounded-sm p-1 group-hover:visible"
                >
                  <BsThreeDots size={16} />
                </div>
                <ul
                  tabIndex={-1}
                  className="dropdown-content menu bg-base-100 rounded-box z-20 w-52 p-2 shadow-lg inset-shadow-xs shadow-black inset-shadow-gray-600"
                >
                  <li>
                    <label className="rounded-t-box rounded-b-none">
                      Rename
                    </label>
                  </li>
                  <hr className="border-base-300 border-t" />
                  <li>
                    <label
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChat(id);
                      }}
                      className="rounded-b-box rounded-t-none"
                    >
                      Delete
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatSidebar;
