import { Button } from 'antd/lib';
import React from 'react';

interface PrimaryButtonProps {
  title: string;
  disabled: boolean;
  htmlType: 'submit' | 'reset' | 'button';
  type: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  block: boolean;
}

export default function PrimaryButton({
  title,
  disabled,
  htmlType,
  type,
  block,
}: PrimaryButtonProps) {
  return (
    <Button
      type={type}
      disabled={disabled}
      htmlType={htmlType}
      block={block}
      style={{
        borderRadius: '8px',
        padding: '24px 50px',
      }}
    >
      {title}
    </Button>
  );
}
