import AuthFormTitle from '@/components/forms/AuthFormTitle';
import PasswordInput from '@/components/ui/PasswordInput';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { passwordGuideLines } from '@/utils/data/data';
import { List } from 'antd/lib';
import { Flex, Form } from 'antd/lib';
import React, { useEffect, useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface CreatePasswordFormProps {
  createPasswordFormData: {
    newPassword: string;
    confirmPassword: string;
  };
  handleSubmit: (data: any) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

export default function CreatePasswordForm({
  createPasswordFormData,
  handleSubmit,
  handleChange,
  isDisabled,
}: CreatePasswordFormProps) {
  const [passwordValidations, setPasswordValidations] = useState(
    passwordGuideLines.map(() => false),
  );

  const validatePassword = (password: string) => {
    const validations = [
      password.length >= 8,
      /[a-z]/.test(password),
      /[A-Z]/.test(password),
      /[0-9]/.test(password),
      /[@#*$&%]/.test(password),
    ];

    setPasswordValidations(validations);
  };

  useEffect(() => {
    validatePassword(createPasswordFormData.newPassword);
  }, [createPasswordFormData.newPassword]);

  console.log(createPasswordFormData);

  return (
    <>
      <AuthFormTitle
        title="Set New Password"
        subTitle="Create a new password to secure your account."
      />
      <Form
        name="login"
        layout="vertical"
        onFinish={handleSubmit}
        style={{ width: '100%', marginTop: '48px' }}
      >
        <Flex vertical gap={54}>
          <Flex vertical gap={32}>
            <PasswordInput
              label="New Password"
              name="newPassword"
              rules={[{ message: 'Enter the New Password' }]}
              placeholder="Enter your password"
              value={createPasswordFormData.newPassword}
              onChange={handleChange}
            />
            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ message: 'Confirm the New Password' }]}
              placeholder="Re-enter your password"
              value={createPasswordFormData.confirmPassword}
              onChange={handleChange}
            />
          </Flex>
          <Flex vertical gap={24}>
            <List
              dataSource={passwordGuideLines}
              renderItem={(item, index) => (
                <List.Item
                  style={{
                    padding: 0,
                    marginBottom: 3,
                    display: 'list-item',
                    color: 'inherit',
                  }}
                >
                  {passwordValidations[index] ? (
                    <CiCircleCheck
                      style={{ color: '#008000', marginRight: '6px' }}
                    />
                  ) : (
                    <IoIosCloseCircleOutline
                      style={{ color: '#FF0000', marginRight: '6px' }}
                    />
                  )}
                  {item}
                </List.Item>
              )}
              split={false}
            />
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
    </>
  );
}
