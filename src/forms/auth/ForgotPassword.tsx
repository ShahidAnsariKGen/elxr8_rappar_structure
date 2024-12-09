import { Flex, Form, Typography } from 'antd/lib';
import React, { useState } from 'react';
import AuthFormTitle from '@/components/forms/AuthFormTitle';
import LoginText from '@/components/forms/LoginText';
import PrimaryButton from '@/components/ui/PrimaryButton';
import TextInput from '@/components/ui/TextInput';

interface ForgotPasswordProps {
  forgotPasswordFormData: {
    email: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isDisabled: boolean;
}

export default function ForgotPassword({
  forgotPasswordFormData,
  handleChange,
  handleSubmit,
  isDisabled,
}: ForgotPasswordProps) {
  return (
    <>
      <AuthFormTitle
        title="Forgot Password?"
        subTitle="Enter the Email ID associated with your account"
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
              label="Email"
              name="email"
              rules={[
                { message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
              placeholder="Enter Your Email"
              value={forgotPasswordFormData.email}
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
      <LoginText />
    </>
  );
}
