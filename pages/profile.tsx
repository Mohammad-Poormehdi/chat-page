import Avatar from "@/components/Avatar";
import TextContainer from "@/components/TextContainer";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Scores from "@/components/Scores";
import { TbEdit } from "react-icons/tb";
import InputContainer from "@/components/InputContainer";
import { useCallback, useState } from "react";
import PictureModal from "@/components/profile/PictureModal";
const profile = [
  "09123456789",
  "شمیلا امیریان",
  "hesampooni@gmail.com",
  "1366/1/1",
  "تهران",
  "خانم",
];
const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <>
      <Head>
        <title>پروفایل کاربری</title>
        <meta name="description" content="پنل پروفایل کاربری" />
      </Head>
      <div className="pt-5 h-auto bg-background dark:bg-background-dark">
        <Navbar />
        <div className="h-full flex py-[205px] items-center justify-center max-md:p-10 bg-background dark:bg-background-dark">
          <div className="bg-white space-y-10 py-8 px-40 rounded-xl mx-auto w-1/2 max-md:w-full max-md:px-10 dark:bg-primary-dark">
            <div className="relative ">
              <Avatar src="/avatar.jpg" className="mx-auto scale-150" />
              <div
                onClick={handleShowModal}
                className="absolute cursor-pointer left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center bg-neutral-300 w-8 h-8"
              >
                <TbEdit />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              <div
                dir="rtl"
                className="w-full border cursor-not-allowed border-neutral-400 rounded-full py-2 flex  items-center bg-background text-black justify-center dark:bg-icon max-md:flex-col"
              >
                09123456789
              </div>
              <InputContainer
              type="text"
                defaultValue="شمیلا امیریان"
                placeholder="نام و نام خانوادگی"
              />
              <InputContainer
              type="text"
                defaultValue="hesampoomni@gmail.com"
                placeholder="ایمیل"
              />
              <InputContainer
              type="text"
                defaultValue="1366/1/1"
                placeholder="تاریخ تولد"
              />
              <InputContainer type="text" defaultValue="تهران" placeholder="مکان" />
              <InputContainer type="text" defaultValue="خانم" placeholder="جنسیت" />
            </div>
            <Scores score={2000} experience={1809} referral={12} />
          </div>
        </div>
        <PictureModal isOpen={showModal} onClose={handleCloseModal} />
      </div>
    </>
  );
};
export default Profile;
