import { ClientParams, ClientListGetResultModel, ClientListItem } from './model/clientModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Page = '/vihacker-uaa/client',
  Set = '/vihacker-uaa/client',
  Del = '/vihacker-uaa/client',
}

// 分页查询
export const page = (params: ClientParams) =>
  defHttp.get<ClientListGetResultModel>({ url: Api.Page, params });

// 保存
export const set = (params: ClientListItem) =>
  defHttp.post<ClientListItem>({ url: Api.Set, params });

  // 修改
export const update = (params: ClientListItem) =>
  defHttp.put<ClientListItem>({ url: Api.Set, params });

// 删除
export const del = (params: { ids: String }) =>
  defHttp.delete<boolean>({ url: Api.Del + `?clientIds=${params.ids}` });
