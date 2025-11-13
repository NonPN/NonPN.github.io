import { useChatStore } from "@/store/ChatStore";

interface ChatSidebarProps {
  onNewChat: () => void;
}

const ChatSidebar = ({ onNewChat }: ChatSidebarProps) => {
  const { chatSideBar, activeChatId, setActiveChat } = useChatStore();

  const onSelectChat = (id: string) => {
    setActiveChat(id);
  };

  return (
    <div className="w-64 bg-base-200 text-base-content p-4 flex flex-col h-screen z-10">
      <button onClick={onNewChat} className="w-full btn btn-primary mb-4">
        New Chat
      </button>
      <div className="flex-1 overflow-y-auto">
        {chatSideBar.map(({ id, title }) => (
          <div
            key={id}
            onClick={() => onSelectChat(id)}
            className={`flex p-2 rounded-lg mb-2 cursor-pointer ${
              activeChatId === id ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            <text className="flex-1">{title}</text>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Click
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-20 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            {/* <button
              className="btn"
              popoverTarget="chat-opt-dropdown"
              style={{ anchorName: "--chat-opt-anchor" } as React.CSSProperties}
            >
              ...
            </button>
            <ul
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-35"
              popover="auto"
              id="chat-opt-dropdown"
              style={
                { positionAnchor: "--chat-opt-anchor" } as React.CSSProperties
              }
            >
              <li className="mb-2 p-2 hover:bg-base-300 rounded-box">
                rename
                <kbd className="kbd kbd-sm">⏎</kbd>
              </li>
              <hr className="border-t border-base-300" />
              <li className="mt-2 p-2 hover:bg-base-300 rounded-box">delete</li>
            </ul> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
