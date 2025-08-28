import React, { useState } from "react";
import ForgetPassword from "./ForgetPassword";
import VerifyCode from "./VerifyCode";
import ResetPassword from "./ResetPassword";

function PasswordResetFlow() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <div>
      {step === 1 && <ForgetPassword setStep={setStep} setEmailProp={setEmail} />}
      {step === 2 && <VerifyCode email={email} setStep={setStep} />}
      {step === 3 && <ResetPassword email={email} setStep={setStep} />}
    </div>
  );
}

export default PasswordResetFlow;
