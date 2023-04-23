import React from "react"
import Image from "next/image"

interface HistoryItemProps{
    label:string,
}
const HistoryItem:React.FC<HistoryItemProps> = ({label})=>{
    return <div className="flex w-full justify-end items-center gap-5">
        <p>{label}</p>
        <Image src='/SVG-icon/comment.svg' alt="history icon" width={18} height={18}  />
    </div>
}
export default HistoryItem