import React from "react"

interface ButtonProps{
    active?:boolean,
    label:string,
}
const Button:React.FC<ButtonProps> = ({label, active})=>{
    return <button className={`px-3 w-full py-2 rounded-2xl text-sm ${active && 'text-white bg-primary'}`}>
        {label}
    </button>
}
export default Button