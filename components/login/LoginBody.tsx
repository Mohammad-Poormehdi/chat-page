import { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Input from "../Input";
import { useRouter } from "next/router";
import { RiH1 } from "react-icons/ri";

enum STEPS {
  PHONE,
  VERIFY,
}
const LoginBody = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  return (
    <div className={`flex items-center justify-center w-full pt-64`}>
      <div className="space-y-8 w-[500px] px-10">
        {step == STEPS.PHONE ? (
          <h1 className="text-center text-2xl text-primary dark:text-white">
            شماره همراه را وارد کنید
          </h1>
        ) : (
          <h1 className="text-center text-2xl text-primary dark:text-white">
             کد ارسال شده را وارد کنید
          </h1>
        )}
        {step === STEPS.PHONE ? (
          <Input type="text" placeholder="شماره همراه" />
        ) : (
          <div className="flex justify-center items-center gap-4">
            <Input type="text" maxLength={1} />
            <Input type="text" maxLength={1} />
            <Input type="text" maxLength={1} />
            <Input type="text" maxLength={1} />
            <Input type="text" maxLength={1} />
          </div>
        )}
        <Button
          onClick={
            step === STEPS.PHONE
              ? () => setStep(step + 1)
              : () => router.push("/")
          }
          label={step === STEPS.PHONE ? "ارسال کد" : "ورود به برنامه"}
          active
        />
        {step === STEPS.VERIFY && (
          <div className="flex items-center text-primary justify-between dark:text-white">
            <p>00:00</p>
            <p>ارسال مجدد کد</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default LoginBody;
