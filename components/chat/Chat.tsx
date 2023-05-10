import { useCallback, useState } from "react";
import ChatInput from "./ChatInput";
import UserMessage from "./UserMessage";
import cuid from "cuid";
import axios from "axios";

const demoMessages = [
  {
    id: cuid(),
    isBot: false,
    message: "چه کاری میتوانید برای من انجام دهید ؟",
  },
  {
    id: cuid(),
    isBot: true,
    message: "به عنوان مدل هوش مصنوعی به طرق مختلف میتوانم به شما کمک کنم ",
  },
];

const Chat = () => {
  const [messages, setMassages] = useState<Array<object>>(demoMessages);

  const addMessage = useCallback(
    async (message: any) => {
      if (message.message === "") {
        return;
      }
      setMassages((prevMessages) => [...prevMessages, message]);

      try {
        console.log({ message: message.message });
        // const response = await fetch("https://hoshbato.com/app/api/chat/", {
        //   method: "POST",
        //   body: JSON.stringify({ message: message.message }),
        // });
        // const data = await response.json();
        const response = await axios.post(
          "https://hoshbato.com/app/api/chat/",
          { message: message.message },
          {
            headers: {
              "Access-Control-Alow-Origin": "*",
              "Access-Control-Allow-Methods": "POST, GET",
              "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
          }
        );
        setMassages((prevMessages) => [
          ...prevMessages,
          { id: cuid(), isBot: true, message: response.data[0].content },
        ]);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    [messages]
  );
  return (
    <div className=" w-4/5 relative max-md:w-full py-5 pl-12 max-md:px-5 max-md:pt-0 bg-background dark:bg-background-dark ">
      <div
        dir="rtl"
        className="chat-box h-[700px] overflow-y-auto py-10 max-md:pt-0 "
      >
        <div dir="ltr" className="space-y-6 pl-40 pb-24 max-md:pl-0">
          {messages.map((message: any) => (
            <UserMessage
              key={message.id}
              isBot={message.isBot}
              message={message.message}
              avatarSrc={message.isBot ? "/bot.jpg" : "/avatar.jpg"}
            />
          ))}
        </div>
      </div>
      <ChatInput onSubmit={addMessage} />
    </div>
  );
};
export default Chat;
