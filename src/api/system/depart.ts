import { DepartVO, DepartDTO, Depart } from './model/departModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  List = '/vihacker-system/dept',
  Set = '/vihacker-system/dept',
  Del = '/vihacker-system/dept/',
}

// 部门树
export const departList = (params?: DepartVO) => defHttp.get({ url: Api.List, params });

// 保存
export const departSet = (params: Depart) => defHttp.post<Depart>({ url: Api.Set, params });

// 修改
export const departUpdate = (params: Depart) => defHttp.put<Depart>({ url: Api.Set, params });

// 删除
export const departDel = (params: { ids: String }) =>
  defHttp.delete<boolean>({ url: Api.Del + `${params.ids}` });
