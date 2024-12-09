import { UserLoginPayload, UserLoginResponse } from './types';
import API_URLS from '@/services/apiURLs';
import axiosInstance from '@/services/constants';

const userLogin = async (data: UserLoginPayload) => {
  const response: UserLoginResponse = (
    await axiosInstance.get(API_URLS.userLogin, {
      data,
    })
  ).data;
  return response;
};

export default userLogin;
