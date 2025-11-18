import ChatInput, { type ChatInputProps } from "@/components/chat/ChatInput";
import Me from "@/assets/me.jpeg";

const ChatAbout = ({ onSendMessage }: ChatInputProps) => {
  return (
    <div className="flex h-screen w-full flex-1 flex-col items-center justify-center p-4">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 m-10 w-30 rounded-full shadow-2xl ring-4 shadow-black ring-offset-8 transition-transform duration-300 ease-in-out hover:scale-105 lg:w-50">
          <img src={Me} />
        </div>
      </div>
      <div className="my-10 max-w-3xl text-center font-semibold">
        <h2 className="mb-5 text-2xl font-semibold">
          Hello, I'm Non Puthikanon!
        </h2>
        <p className="text-base-content/70 mb-6 text-center text-sm lg:text-lg">
          I'm a software developer with a passion for building web applications
          and exploring new technologies. Feel free to ask me anything or start
          a conversation! ✨
        </p>
      </div>
      <ChatInput className="min-w-5/6" onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatAbout;
