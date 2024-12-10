import React from 'react';
import PageDetails from '@/components/ui/PageDetails';
import LoginForm from '@/forms/auth/LoginForm';
import AuthLayout from '@/layouts/AuthLayout';

export default function login() {
  return (
    <>
      <PageDetails title="Login" description="Elr8 Lgoin Page" />
      <AuthLayout image="/assets/login/login_banner.jpeg">
        <LoginForm />
      </AuthLayout>
    </>
  );
}
