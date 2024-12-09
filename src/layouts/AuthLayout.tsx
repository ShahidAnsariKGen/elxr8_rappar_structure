import { Grid, Image, Col, Row } from 'antd/lib';
import React, { ReactNode } from 'react';

const { useBreakpoint } = Grid;

interface AuthLayoutProps {
  children: ReactNode;
  image: string;
}

export default function AuthLayout({ children, image }: AuthLayoutProps) {
  const screens = useBreakpoint();
  return (
    <Row style={{ height: '100vh' }}>
      <Image
        style={{
          position: 'fixed',
          left: 27,
          top: 27,
          width: '66.4px',
          height: '38px',
          zIndex: '10',
        }}
        src="/assets/logo/exlr8.png"
      />
      <Col
        xs={0}
        lg={16}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Col
        xs={24}
        lg={8}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            padding: screens.lg ? '106px 79px' : '28px 25px',
          }}
        >
          {children}
        </div>
      </Col>
    </Row>
  );
}
