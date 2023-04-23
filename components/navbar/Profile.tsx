import Avatar from "../Avatar"
import ProfileItem from "./ProfileItem"
import {HiBell} from 'react-icons/hi'
import {IoMdSettings} from 'react-icons/io'
import {BsBrightnessHighFill} from 'react-icons/bs'

const icons = [
    {icon:HiBell, alt:'notifications'},
    {icon:IoMdSettings, alt:'settings'},
    {icon:BsBrightnessHighFill , alt:'brightness'},
]

const Profile = ()=>{
    return <div className="flex items-center gap-5 last:max-md:block">
        <Avatar src="/../public/avatar.jpg" />
        {icons.map(item=>(<ProfileItem icon={item.icon}  className={item.alt == 'brightness' ? 'max-md:block' : 'max-md:hidden' } />))}
    </div>
}
export default Profile