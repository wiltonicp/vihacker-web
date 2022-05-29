import { MenuVO, Menu } from './model/menuModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  List = '/vihacker-system/menu',
  Set = '/vihacker-system/menu',
  Del = '/vihacker-system/menu/',
}

// 菜单树
export const menuList = (params?: MenuVO) => defHttp.get({ url: Api.List, params });

// 保存
export const menuSet = (params: Menu) => defHttp.post<Menu>({ url: Api.Set, params });

// 修改
export const menuUpdate = (params: Menu) => defHttp.put<Menu>({ url: Api.Set, params });

// 删除
export const menuDel = (params: { ids: String }) =>
  defHttp.delete<boolean>({ url: Api.Del + `${params.ids}` });
