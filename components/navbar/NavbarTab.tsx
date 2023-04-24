import { useCallback, useState } from "react";
import TabItem from "./TabItem";
import {TbNotebook} from 'react-icons/tb'
import {FaBrain} from 'react-icons/fa'
import {FaComments} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'

const icons = [
  { icon:TbNotebook, alt: "copy" },
  { icon:FaBrain, alt: "AI" },
  { icon:FaComments, alt: "comments" },
  { icon:AiFillHome, alt: "home" },
];

const NavbarTab = () => {
  const [selectedItem, setSelectedItem] = useState("comments");
  const handleClick = useCallback(
    (alt: string) => {
      setSelectedItem(alt);
    },
    []
  );
  return (
    <div className="flex items-center gap-5 max-md:hidden">
      {icons.map((item) => (
        <TabItem onClick={()=>handleClick(item.alt)} key={item.alt} icon={item.icon} selected={selectedItem === item.alt} />
      ))}
    </div>
  );
};
export default NavbarTab;
