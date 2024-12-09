import { Typography, Flex, Grid } from 'antd/lib';
import React from 'react';

const { Text } = Typography;
const { useBreakpoint } = Grid;

interface AuthFormTitleProps {
  title: string;
  subTitle: string;
}

export default function AuthFormTitle({ title, subTitle }: AuthFormTitleProps) {
  const screens = useBreakpoint();
  return (
    <Flex vertical gap={16}>
      <Text
        style={{ display: 'block', fontSize: screens.lg ? '32px' : '24px' }}
      >
        {title}
      </Text>
      <Text
        style={{ display: 'block', fontSize: screens.lg ? '14px' : '12px' }}
      >
        {subTitle}
      </Text>
    </Flex>
  );
}
