import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  GetCaptchaModel,
} from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import md5 from 'js-md5';

enum Api {
  Login = '/vihacker-uaa/oauth/token',
  Logout = '/vihacker-uaa/auth/logout',
  GetUserInfo = '/vihacker-uaa/auth/user',
  GetPermCode = '/getPermCode',
  GetCaptcha = '/vihacker-uaa/auth/code',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      headers: {
        key: params.key,
        code: params.code,
      },
      params: {
        username: params.username,
        password: params.password,
        grant_type: 'password',
        scope: 'all',
      },
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.delete({ url: Api.Logout });
}

export function getCaptcha() {
  return defHttp.get<GetCaptchaModel>({ url: Api.GetCaptcha });
}
