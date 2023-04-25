import LoginBody from "@/components/login/LoginBody";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
export async function getServerSideProps() {
  return {
    props: {},
  };
}
const Login = () => {
  return (
    <>
      <Head>
        <title>ثبت نام</title>
        <meta
          name="description"
          content="برای استفاده از هوش مصنوعی ثبت نام کنید"
        />
      </Head>
      <div className="h-full bg-background pt-5 dark:bg-background-dark">
        <Navbar />
        <LoginBody />
      </div>
    </>
  );
};
export default Login;
