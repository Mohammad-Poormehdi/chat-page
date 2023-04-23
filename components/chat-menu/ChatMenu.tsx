import Button from "../Button"
import HistoryItem from "./HistoryItem"

const ChatMenu = ()=>{
    return <div className="px-10 py-5 w-1/4 max-md:hidden space-y-10">
        <div className="flex rounded-2xl bg-white">
            <Button label="ChatGPT 3.5" active />
            <Button label="ChatGPT 4"  />
        </div>
        <div className="space-y-2">
            <HistoryItem label="یسبسی" />
            <HistoryItem label="یسبسی" />
            <HistoryItem label="یسبسی" />
        </div>
    </div>
}
export default ChatMenu