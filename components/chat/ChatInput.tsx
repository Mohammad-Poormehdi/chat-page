import { HiPaperAirplane } from "react-icons/hi";
import Input from "../Input";
import { useCallback, useState } from "react";
import cuid from "cuid";

interface ChatInputProps {
  onSubmit: (message: object) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>();
  const handleInput = useCallback(
    (data: string) => {
      setInput(data);
    },
    [input]
  );
  return (
    <div className="flex my-5 justify-between w-full items-center rounded-full bg-white px-4 py-3 dark:bg-primary-dark  ">
      <HiPaperAirplane
        onClick={() => {
          onSubmit({ id: cuid(), isBot: false, message: input });
          setInput('')
        }}
        size={30}
        className="text-primary scale-x-[-1] cursor-pointer mx-5 dark:text-secondary"
      />
      <Input onChange={handleInput} value={input} placeholder="از لیبرا بپرسید" />
    </div>
  );
};
export default ChatInput;
