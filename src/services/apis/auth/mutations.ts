import { useMutation } from '@tanstack/react-query';
import userLogin from './api';
import { UserLoginPayload } from './types';

export default function useUserLogin() {
  return useMutation({
    mutationKey: ['user-login'],
    mutationFn: (data: UserLoginPayload) => userLogin(data),
  });
}
