import { useMutation } from '@tanstack/react-query';
import { UserLoginPayload } from './types';
import { userLogin } from './api';

export function useUserLogin() {
  return useMutation({
    mutationKey: ['user-login'],
    mutationFn: (data: UserLoginPayload) => userLogin(data),
  });
}
