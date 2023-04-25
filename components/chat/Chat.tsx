import { useCallback, useState } from "react";
import ChatInput from "./ChatInput";
import UserMessage from "./UserMessage";
import cuid from "cuid";

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
    (message: any) => {
      if (message.message===''){
        console.log(message)
        return
      }
      setMassages([...messages, message]);
    },
    [messages]
  );
  return (
    <div className=" w-4/5 relative max-md:w-full py-5 pl-12 max-md:px-5 bg-background dark:bg-background-dark ">
      <div dir="rtl" className="chat-box h-[700px] overflow-y-auto py-10 ">
        <div dir="ltr" className="space-y-6 pl-40 max-md:pl-0">
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
