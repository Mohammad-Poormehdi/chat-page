import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

const Charge = () => {
  return (
    <>
      <Head>
        <title>شارژ امتیاز</title>
        <meta name="description" content="شارژ امتیاز" />
      </Head>
      <div className="h-full pt-8 bg-background dark:bg-background-dark">
        <Navbar />
      </div>
    </>
  );
};
export default Charge;
