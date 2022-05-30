import { Role, RoleVO, RoleDTO } from './model/roleModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Page = '/vihacker-system/role',
  Set = '/vihacker-system/role',
  Del = '/vihacker-system/role/',
  SetStatus = '/vihacker-system/role/set-status',
  AllList = '/vihacker-system/role/options',
}

// 列表
export const rolePage = (params?: RoleVO) => defHttp.get<RoleDTO>({ url: Api.Page, params });

// 保存
export const roleSet = (params: Role) => defHttp.post<Role>({ url: Api.Set, params });

// 修改
export const roleUpdate = (params: Role) => defHttp.put<Role>({ url: Api.Set, params });

// 删除
export const roleDel = (params: { ids: String }) =>
  defHttp.delete<boolean>({ url: Api.Del + `${params.ids}` });

// 设置状态
export const roleSetStatus = (id: number, status: string) =>
  defHttp.put({ url: Api.SetStatus, params: { id, status } });

// 查询所有角色列表
export const roleAllList = (params?: RoleVO) => defHttp.get<RoleDTO>({ url: Api.AllList, params });
