import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const Logo = () => {
  return (
    <h1 className={"text-3xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-primary dark:text-white mx-auto max-md:hidden "+orbitron.className}>LIBERO</h1>
  );
};
export default Logo;
