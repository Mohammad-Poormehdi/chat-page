import React from "react"
import Score from "./Score"
import NavbarTab from "./NavbarTab"
import Profile from "./Profile"
import Logo from "./Logo"
import Menu from "./Menu"
interface NavbarProps{
    onDarkMode:(data:boolean)=>void,
}
const Navbar:React.FC<NavbarProps> = ({onDarkMode})=>{
    return (
        <nav className="w-[95%] h-[72px] rounded-full p-4 flex justify-between items-center mx-auto bg-white dark:bg-primary-dark">
            <Profile onDarkMode={onDarkMode} />
            <Score />
            <Logo />
            <NavbarTab />
            <Menu />
        </nav>
    )
}
export default Navbar