import Button from "@/components/Button";
import Input from "@/components/Input";
import Scores from "@/components/Scores";
import TextContainer from "@/components/TextContainer";
import ChargeSection from "@/components/charge/Range";
import PaymentCard from "@/components/charge/PaymentCard";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

const Charge = () => {
  return (
    <>
      <Head>
        <title>شارژ امتیاز</title>
        <meta name="description" content="شارژ امتیاز" />
      </Head>
      <div className="h-auto pt-8 bg-background dark:bg-background-dark">
        <Navbar />
        <div className="max-w-4xl  space-y-6 mx-auto px-10 py-10">
          <div className="w-full p-5 rounded-xl bg-white dark:bg-primary-dark">
            <Scores score={2000} experience={108} referral={12} />
          </div>
          <div className="w-full p-5 grid grid-cols-5 max-md:grid-cols-2 items-center  gap-4 rounded-xl bg-white dark:bg-primary-dark">
            <div className="max-md:col-span-2">
              <Button label="کپی کردن" active />
            </div>
            <div className="col-span-2">
              <TextContainer>https://hoshbato.com/12343</TextContainer>
            </div>

            <TextContainer>450</TextContainer>
            <p className="mx-auto dark:text-icon">معرفی کردن</p>
          </div>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 ">
            <div className="w-full p-5 rounded-xl h-[600px] overflow-y-auto space-y-4 bg-white dark:bg-primary-dark max-md:order-2">
              <div className="grid grid-cols-3">
                <p className="mx-auto text-sm text-icon">شناسه</p>
                <p className="mx-auto text-sm text-icon">هزینه</p>
                <p className="mx-auto text-sm text-icon">وضعیت</p>
              </div>
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
            </div>
            <div className="w-full space-y-9 p-5 rounded-xl bg-white dark:bg-primary-dark max-md:order-1">
              <ChargeSection />
              <TextContainer>1000 امتیاز</TextContainer>
              <TextContainer>
                <input
                  type="text"
                  className="bg-transparent outline-none text-center"
                  placeholder="کد افزایش امتیاز"
                />
              </TextContainer>
              <button className="px-3 py-2 bg-orange-400 rounded-full text-white w-full">اعتبار سنجی</button>
              <p className="text-center dark:text-white">15% بیشتر شارژ شدید</p>
              <TextContainer>50000 تومان</TextContainer>
              <Button label="شارژ کن" active />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Charge;
