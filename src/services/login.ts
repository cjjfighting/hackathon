import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function Login(params: LoginParamsType) {
  return request('/api/pms/auth/login', {
    method: 'POST',
    data: params,
  },false);
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
