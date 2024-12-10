import AuthFormTitle from '@/components/forms/AuthFormTitle';
import PrimaryButton from '@/components/ui/PrimaryButton';
import TextInput from '@/components/ui/TextInput';
import { Form } from 'antd/lib';
import { Flex } from 'antd/lib';
import React from 'react';

interface OTPFormProps {
  otpFormData: {
    otp: string;
  };
  email: string;
  handleSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

export default function OTPForm({
  otpFormData,
  email,
  handleSubmit,
  handleChange,
  isDisabled,
}: OTPFormProps) {
  return (
    <>
      <AuthFormTitle
        title="Enter OTP"
        subTitle={`OTP sent to ${email} to set New password.`}
      />
      <Form
        name="login"
        layout="vertical"
        onFinish={handleSubmit}
        style={{ width: '100%', marginTop: '48px' }}
      >
        <Flex vertical gap={72}>
          <Flex vertical gap={32}>
            <TextInput
              label="OTP"
              name="otp"
              rules={[
                { message: 'Please enter your otp!' },
                { type: 'string', message: 'Please enter a 5 digit number!' },
              ]}
              placeholder="Enter Your OTP"
              value={otpFormData.otp}
              onChange={handleChange}
            />
          </Flex>
          <Form.Item>
            <PrimaryButton
              title="Send OTP"
              disabled={isDisabled}
              htmlType="submit"
              type="primary"
              block
            />
          </Form.Item>
        </Flex>
      </Form>
    </>
  );
}
