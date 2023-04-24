import React from "react"
import Image from "next/image"
import {RiMessage3Fill} from 'react-icons/ri'

interface HistoryItemProps{
    label:string,
}
const HistoryItem:React.FC<HistoryItemProps> = ({label})=>{
    return <div className="flex w-full justify-end items-center gap-5">
        <p className="dark:text-white">{label}</p>
        <RiMessage3Fill size={20} className="text-icon" />
    </div>
}
export default HistoryItem