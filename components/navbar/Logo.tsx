import Image from "next/image"
const Logo = ()=>{
    return <Image src='/SVG-icon/logo.svg' alt="logo " width={200} height={48} className="mx-auto max-md:hidden" />
}
export default Logo