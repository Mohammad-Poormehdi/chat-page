import { HiPaperAirplane } from "react-icons/hi";
import Textarea from "../Textarea";
import { useCallback, useState } from "react";
import cuid from "cuid";

interface messageInterFace{
  id:string,
  isBot:boolean,
  message:string | undefined,
}
interface ChatInputProps {
  onSubmit: (message: messageInterFace) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>('');
  const handleInput = useCallback((data: string) => {
    setInput(data);
  }, []);
  return (
    <div className="py-4 px-10 fixed bottom-0 left-0 w-4/5 max-md:w-full bg-background dark:bg-background-dark ">
      <div className="flex my-5 justify-between w-full items-center rounded-full bg-white px-4 py-3 dark:bg-primary-dark  ">
        <HiPaperAirplane
          onClick={() => {
            onSubmit({ id: cuid(), isBot: false, message: input });
            setInput('')
          }}
          size={30}
          className="text-primary scale-x-[-1] cursor-pointer mx-5 dark:text-secondary"
        />
        <Textarea
          onChange={handleInput}
          value={input}
          placeholder="از لیبرا بپرسید"
        />
      </div>
    </div>
  );
};
export default ChatInput;
