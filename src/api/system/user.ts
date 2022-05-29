import { User, UserVO, UserDTO } from './model/userModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Page = '/vihacker-system/user',
  Set = '/vihacker-system/user',
  Del = '/vihacker-system/user/',
  ResetPassword = '/vihacker-system/user/password/reset',
}

// 列表
export const page = (params?: UserVO) => defHttp.get<UserDTO>({ url: Api.Page, params });

// 保存
export const set = (params: User) => defHttp.post<User>({ url: Api.Set, params });

// 修改
export const update = (params: User) => defHttp.put<User>({ url: Api.Set, params });

// 删除
export const del = (params: { ids: String }) =>
  defHttp.delete<boolean>({ url: Api.Del + `${params.ids}` });

//  管理员重置用户密码
export const userSetPassword = (params?: User) =>
  defHttp.put<boolean>({ url: Api.ResetPassword, params });
