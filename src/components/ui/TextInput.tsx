import { Rule } from 'antd/es/form';
import { Form, Input } from 'antd/lib';
import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  rules: Rule[];
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  label,
  name,
  rules,
  placeholder,
  value,
  onChange,
}: TextInputProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      style={{ marginBottom: '0' }}
    >
      <Input
        name="email"
        value={value}
        onChange={onChange}
        style={{ padding: '12px 20px' }}
        placeholder={placeholder}
      />
    </Form.Item>
  );
}
