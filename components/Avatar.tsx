import Image from "next/image"
import React from "react"
interface AvatarProps{
    src:string,
}
const Avatar:React.FC<AvatarProps> = ({src}) =>{
    return <Image priority={true} src={src} alt="avatar" width={60} height={60} className="rounded-full" />
}
export default Avatar