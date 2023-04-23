import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface ProfileItemProps {
  icon:IconType,
  className?:string | null | undefined,
}
const ProfileItem: React.FC<ProfileItemProps> = ({ icon:Icon, className }) => {
  return <Icon size={24} className="text-icon" />;
};
export default ProfileItem;
