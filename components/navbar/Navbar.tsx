import React from "react"
import Score from "./Score"
import NavbarTab from "./NavbarTab"
import Profile from "./Profile"
import Logo from "./Logo"
import Menu from "./Menu"

const Navbar = ()=>{
    return (
        <nav className="w-[95%] h-[72px] rounded-full p-4 flex justify-between items-center mx-auto bg-white">
            <Profile />
            <Score />
            <Logo />
            <NavbarTab />
            <Menu />
        </nav>
    )
}
export default Navbar