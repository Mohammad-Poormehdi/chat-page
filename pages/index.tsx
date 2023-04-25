import Modal from "@/components/Modal";
import ChatMenu from "@/components/chat-menu/ChatMenu";
import GPT4Modal from "@/components/chat-menu/GPT4Modal";
import Chat from "@/components/chat/Chat";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import { useCallback, useState } from "react";
export async function getStaticProps() {
  return {
    props: {},
  };
}
const Home = () => {
  return (
    <>
    <Head>
      <title>چت</title>
      <meta name="description" content="با هوش مصنوعی چت کنید" />
    </Head>
      <div className="bg-background pt-5 h-full dark:bg-background-dark">
        <Navbar />
        <div className="flex gap-5">
          <Chat />
          <ChatMenu />
        </div>
        
      </div>
    </>
  );
};
export default Home;
