import ChatMenu from "@/components/chat-menu/ChatMenu";
import Chat from "@/components/chat/Chat";
import Navbar from "@/components/navbar/Navbar";
import { useCallback, useState } from "react";
export async function getStaticProps() {
  return {
    props: {},
  };
}
const Home = () => {
  const [isDark, setIsDark] = useState(false)
  const onDarkMode = useCallback((data:boolean)=>{
    setIsDark(data)
  },[])
  return (
    <div className={`${isDark && 'dark'} h-full`}>
    <div className="bg-background pt-5 h-full dark:bg-background-dark">
      <Navbar />
      <div className="flex gap-5">
        <Chat />
        <ChatMenu />
      </div>
    </div>
    </div>
  );
};
export default Home;
