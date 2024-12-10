import { Badge, Breakpoint, Flex, Image, Layout, Modal } from 'antd/lib';
import React, { useCallback, useEffect, useState } from 'react';
import Searchbar from '../ui/Searchbar';
import { CiSearch } from 'react-icons/ci';
import { RiShoppingCartLine } from 'react-icons/ri';

const { Header } = Layout;

interface DashboardHeaderProps {
  screens: Partial<Record<Breakpoint, boolean>>;
}

export default function DashboardHeader({ screens }: DashboardHeaderProps) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchDrawer = useCallback(() => {
    setIsSearchVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && isSearchVisible) {
        setIsSearchVisible(false);
      }
    };

    // Add the event listener on mount
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

    // Type assertion to HTMLElement
    const modalContent = document.querySelector(
      '.ant-modal-content',
    ) as HTMLElement;
    if (modalContent) {
      modalContent.style.padding = '0'; // Removes the padding from modal content
    }
  }, [isSearchVisible]);

  return (
    <Header
      style={{
        background: '#fff',
        padding: screens.lg ? '21px 40px' : '18px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        alt="elr8_logo"
        style={{
          width: '66.4px',
          height: screens.lg ? '32px' : '24px',
          objectFit: 'contain',
        }}
        src="/assets/logo/exlr8.png"
        preview={false}
      />
      <Flex align="center" gap="middle">
        {screens.lg && <Searchbar width="346px" />}
        {!screens.lg && (
          <>
            <CiSearch onClick={toggleSearchDrawer} />
            <RiShoppingCartLine />
          </>
        )}
        <Modal
          open={isSearchVisible}
          onCancel={toggleSearchDrawer}
          footer={null}
          closable={false}
          maskClosable={true}
          mask={true}
          style={{ top: 10 }}
          onOk={() => setIsSearchVisible(false)}
        >
          <Searchbar width="100%" />
        </Modal>
      </Flex>
    </Header>
  );
}
