interface ChatSidebarProps {
  onNewChat: () => void;
  conversations: Array<{
    id: string;
    title: string;
  }>;
  activeConversationId?: string;
  onSelectConversation: (id: string) => void;
}

const ChatSidebar = ({
  onNewChat,
  conversations,
  activeConversationId,
  onSelectConversation,
}: ChatSidebarProps) => {
  return (
    <div className="w-64 bg-base-200 text-base-content p-4 flex flex-col h-screen">
      <button onClick={onNewChat} className="w-full btn btn-primary mb-4">
        New Chat
      </button>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => onSelectConversation(conv.id)}
            className={`p-2 rounded-lg mb-2 cursor-pointer ${
              activeConversationId === conv.id
                ? "bg-gray-600"
                : "hover:bg-gray-700"
            }`}
          >
            {conv.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
