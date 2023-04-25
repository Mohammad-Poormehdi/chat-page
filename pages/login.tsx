import LoginBody from "@/components/login/LoginBody"
import Navbar from "@/components/navbar/Navbar"

const Login = ()=>{
    return <div className="h-full bg-background pt-5 dark:bg-background-dark">
        <Navbar />
        <LoginBody />
    </div>
}
export default Login