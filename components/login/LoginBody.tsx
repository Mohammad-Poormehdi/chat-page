import { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Input from "../Input";
import { useRouter } from "next/router";

enum STEPS {
  PHONE,
  VERIFY,
}
const LoginBody = () => {
  const [step, setStep] = useState(0);
  const router = useRouter()
  return (
    <div className="flex items-center justify-center w-full pt-40">
      <div className="space-y-8 w-[500px] px-10">
        {step === STEPS.PHONE ? (
          <div className="w-[200px] h-[300px] mx-auto rounded-lg bg-icon text-white flex justify-center items-center">
            <p>ویدیو توضیحات</p>
          </div>
        ) : (
          <Image
            src="/bot-image.png"
            alt="bot image"
            width={200}
            height={300}
            className="w-auto h-auto mx-auto"
          />
        )}
        {step === STEPS.PHONE ? (
          <Input type="text" placeholder="شماره همراه" maxLength={1} />
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
          onClick={step===STEPS.PHONE ? ()=>setStep(step+1) : ()=>router.push('/') }
          label={step === STEPS.PHONE ? "ارسال کد" : "ورود به برنامه"}
          active
        />
        {step === STEPS.VERIFY && (
          <div className="flex items-center text-primary justify-between">
            <p>00:00</p>
            <p>ارسال مجدد کد</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default LoginBody;
