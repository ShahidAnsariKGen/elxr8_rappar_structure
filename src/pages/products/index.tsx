import PageDetails from '@/components/ui/PageDetails';
import DashboardLayout from '@/layouts/DashboardLayout';
import React from 'react';

export default function index() {
  return (
    <>
      <PageDetails title="Products" description="List of products" />
      <DashboardLayout>Hey</DashboardLayout>
    </>
  );
}
