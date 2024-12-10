import React, { useCallback, useState } from 'react';
import PageDetails from '@/components/ui/PageDetails';
import ForgotPassword from '@/forms/auth/ForgotPassword';
import AuthLayout from '@/layouts/AuthLayout';
import handleInputChange from '@/utils/handleInputChange';
import OTPForm from '@/forms/auth/OTPForm';
import CreatePasswordForm from '@/forms/auth/CreatePasswordForm';

export default function forgotPassword() {
  const [step, setStep] = useState(1);
  const [forgotPasswordFormData, setForgotPasswordFormData] = useState({
    email: '',
  });

  const [otpFormData, setOtpFormData] = useState({
    otp: '',
  });

  const [createPasswordFormData, setCreatePasswordFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleForgotPasswordInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e, setForgotPasswordFormData);
    },
    [setForgotPasswordFormData],
  );

  const handleOTPInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e, setOtpFormData);
    },
    [setOtpFormData],
  );

  const handleCreatePasswordInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e, setCreatePasswordFormData);
    },
    [setCreatePasswordFormData],
  );

  const handleForgotPasswordSubmit = useCallback(() => {
    setStep(2);
  }, []);

  const handleOTPSubmit = useCallback(() => {
    setStep(3);
  }, []);

  const handleCreatePasswordSubmit = useCallback((data: any) => {
    setStep(4);
    console.log(data);
    // console.log(createPasswordFormData);
  }, []);

  console.log(createPasswordFormData, forgotPasswordFormData, otpFormData);

  return (
    <>
      <PageDetails title="Forgot Password" description="Elr8 Forgot Password" />
      <AuthLayout image="/assets/login/login_banner.jpeg">
        {step == 1 && (
          <ForgotPassword
            forgotPasswordFormData={forgotPasswordFormData}
            handleChange={handleForgotPasswordInputChange}
            handleSubmit={handleForgotPasswordSubmit}
            isDisabled={!forgotPasswordFormData.email}
          />
        )}
        {step == 2 && (
          <OTPForm
            otpFormData={otpFormData}
            email={forgotPasswordFormData.email}
            handleSubmit={handleOTPSubmit}
            handleChange={handleOTPInputChange}
            isDisabled={!otpFormData.otp}
          />
        )}
        {step == 3 && (
          <CreatePasswordForm
            createPasswordFormData={createPasswordFormData}
            handleSubmit={handleCreatePasswordSubmit}
            handleChange={handleCreatePasswordInputChange}
            isDisabled={
              createPasswordFormData.newPassword !==
                createPasswordFormData.confirmPassword ||
              (!createPasswordFormData.newPassword &&
                !createPasswordFormData.confirmPassword)
            }
          />
        )}
      </AuthLayout>
    </>
  );
}
