import Avatar from "../Avatar";
import ProfileItem from "./ProfileItem";
import { HiBell } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { BsBrightnessHighFill } from "react-icons/bs";
import {FaMoon} from 'react-icons/fa'
import { useCallback, useState } from "react";

const icons = [
  { icon: HiBell, alt: "notifications" },
  { icon: IoMdSettings, alt: "settings" },
  { icon: BsBrightnessHighFill, alt: "brightness" },
];

interface ProfileProps{
    onDarkMode:(data:boolean)=>void,
}
const Profile:React.FC<ProfileProps> = ({onDarkMode}) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const handleDarkMode = useCallback(() => {
    setIsDark((prevState)=>!prevState);
    onDarkMode(!isDark)
  }, [isDark, onDarkMode]);
  return (
    <div className="flex items-center gap-5 last:max-md:block">
      <Avatar src="/../public/avatar.jpg" />
      {icons.map((item) => (
        <ProfileItem
          onClick={item.alt === "brightness" ? handleDarkMode : undefined}
          key={item.alt}
          icon={isDark && item.alt==='brightness' ? FaMoon : item.icon}
          className={
            item.alt == "brightness" ? "max-md:block text-primary dark:text-secondary" : "max-md:hidden"
          }
        />
      ))}
    </div>
  );
};
export default Profile;
