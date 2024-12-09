import { Rule } from 'antd/es/form';
import { Form, Input } from 'antd/lib';
import React from 'react';

interface PasswordInputProps {
  label: string;
  name: string;
  rules: Rule[];
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  label,
  name,
  rules,
  placeholder,
  value,
  onChange,
}: PasswordInputProps) {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input.Password
        name={name}
        value={value}
        onChange={onChange}
        style={{ padding: '14px 20px' }}
        placeholder={placeholder}
      />
    </Form.Item>
  );
}
