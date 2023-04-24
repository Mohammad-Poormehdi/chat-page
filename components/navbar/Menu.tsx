import Image from "next/image"
import {AiFillAppstore} from 'react-icons/ai'

const Menu = ()=>{
    return <button className="md:hidden">
        <AiFillAppstore size={24} className="text-icon" />
    </button>
}
export default Menu