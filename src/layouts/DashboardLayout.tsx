import DashboardHeader from '@/components/layout/DashboardHeader';
import { Grid } from 'antd/lib';
import { Layout } from 'antd/lib';
import React, { ReactNode } from 'react';

const { useBreakpoint } = Grid;

interface DashboardLayoutProps {
  children: ReactNode;
}

const { Content } = Layout;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const screens = useBreakpoint();
  return (
    <Layout style={{ minHeight: '100vh', minWidth: '100wh' }}>
      <DashboardHeader screens={screens} />
      <Content style={{ margin: '16px' }}>{children}</Content>
    </Layout>
  );
}
