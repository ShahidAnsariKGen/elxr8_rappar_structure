import { Flex, Form, Typography } from 'antd/lib';
import Link from 'next/link';
import React, { useState } from 'react';
import AuthFormTitle from '../../components/forms/AuthFormTitle';
import LoginText from '../../components/forms/LoginText';
import PasswordInput from '@/components/ui/PasswordInput';
import PrimaryButton from '@/components/ui/PrimaryButton';
import TextInput from '@/components/ui/TextInput';

const { Text } = Typography;

export default function LoginForm() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const isDisabled = !(loginFormData.email && loginFormData.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', loginFormData);
  };

  return (
    <>
      <AuthFormTitle
        title="Login"
        subTitle="Welcome! Please log in to your account."
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
              value={loginFormData.email}
              onChange={handleChange}
            />
            <PasswordInput
              label="Password"
              name="password"
              rules={[{ message: 'Please enter your password!' }]}
              placeholder="Enter your password"
              value={loginFormData.password}
              onChange={handleChange}
            />
          </Flex>
          <Flex vertical gap={24}>
            <Link href="/forgotPassword">
              <Text
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  fontSize: '14px',
                }}
              >
                Forgot Password?
              </Text>
            </Link>
            <Form.Item>
              <PrimaryButton
                title="Login"
                disabled={isDisabled}
                htmlType="submit"
                type="primary"
                block
              />
            </Form.Item>
          </Flex>
        </Flex>
      </Form>
      <LoginText />
    </>
  );
}
