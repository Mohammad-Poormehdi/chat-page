import ChatMenu from "@/components/chat-menu/ChatMenu";
import Chat from "@/components/chat/Chat";
import Navbar from "@/components/navbar/Navbar";

const Home = () => {
  return <div className="bg-background pt-5">
    <Navbar />
    <div className="flex gap-5">
      <Chat />
      <ChatMenu />
    </div>
    </div>;
};
export default Home;
