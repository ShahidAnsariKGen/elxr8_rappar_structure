import { Input } from 'antd/lib';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchbarProps {
  width: string;
  onClick?: () => void;
}

export default function Searchbar({ width, onClick }: SearchbarProps) {
  return (
    <Input
      placeholder="Search"
      suffix={<CiSearch style={{ color: '#7A7A7A' }} onClick={() => onClick} />}
      style={{ padding: '12.65px 15px', width: width }}
    />
  );
}
