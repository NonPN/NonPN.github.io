import { SIDE_BAR_DRAWER_ID } from "@/pages/Home";
import { useChatStore } from "@/store/ChatStore";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import { RiChatNewLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

interface ChatSidebarProps {
  onNewChat: () => void;
}

const ChatSidebar = ({ onNewChat }: ChatSidebarProps) => {
  const { chatSideBar, activeChatId, setActiveChat, deleteChat } =
    useChatStore();

  const onSelectChat = (id: string) => {
    setActiveChat(id);
  };

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
            className="btn btn-square btn-ghost is-drawer-close:w-full is-drawer-open:m-2"
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
        <ul className="menu w-full grow">
          <li className="mb-2">
            <button
              onClick={onNewChat}
              className="btn btn-primary is-drawer-close:p-0"
            >
              <text className="is-drawer-close:hidden">New Chat</text>
              <RiChatNewLine
                className="is-drawer-open:ml-2 is-drawer-close:size-4"
                size={20}
              />
            </button>
          </li>
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
              <text className="flex-1">{title}</text>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="label invisible m-1 group-hover:visible"
                >
                  <BsThreeDots size={16} />
                </div>
                <ul
                  tabIndex={-1}
                  className="dropdown-content menu bg-base-100 rounded-box z-20 w-52 p-2 shadow-sm"
                >
                  <li>
                    <label className="rounded-t-box rounded-b-none">
                      rename
                    </label>
                  </li>
                  <hr className="border-base-300 border-t" />
                  <li>
                    <label
                      onClick={(e) => {
                        e.preventDefault();
                        deleteChat(id);
                      }}
                      className="rounded-b-box rounded-t-none"
                    >
                      delete
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
