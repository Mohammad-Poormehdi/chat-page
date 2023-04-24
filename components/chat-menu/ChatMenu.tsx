import { useCallback, useState } from "react";
import Button from "../Button";
import HistoryItem from "./HistoryItem";
import cuid from "cuid";


const buttons = [{ label: "ChatGPT 3.5" }, { label: "ChatGPT 4" }];
const demoHistory = [
  {id:cuid(), label:'انواع ماساژ'},
  {id:cuid(), label:"نام دکتر تهرانی"},
  {id:cuid(), label:"برنامه نویسی پایتون"},
  {id:cuid(), label:"بهترین روش نظرسنجی"},
  {id:cuid(), label:"دین شیعه"},
  {id:cuid(), label:"سینمای بالیوود"},
]

const ChatMenu = () => {
  const [activeButton, setActiveButton] = useState("ChatGPT 3.5");
  const handleClick = useCallback((label: string) => {
    setActiveButton(label);
  }, []);
  return (
    <div className="px-10 py-5 w-1/4 max-md:hidden space-y-10">
      <div className="flex rounded-2xl bg-white dark:bg-primary-dark">
        {buttons.map((button) => (
          <Button
            onClick={() => handleClick(button.label)}
            active={activeButton === button.label}
            key={button.label}
            label={button.label}
          />
        ))}
      </div>
      <div className="space-y-2">
          {demoHistory.map(item=><HistoryItem key={item.id} label={item.label} />)}
      </div>
    </div>
  );
};
export default ChatMenu;
