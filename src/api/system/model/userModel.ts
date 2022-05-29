// 引入基础包
import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

// 定义查询参数
export type UserVO = BasicPageParams & {
  name?: string;
  path?: string;
};

// 定义用户对象
export interface User {
  id: string;
  username: string;
  password?: string;
  nickName: string;
  realName: string;
  avatar: string;
  email: string;
  mobile: string;
  birthday: string;
  sex: number | string;
  description: string;
  roleId: string | number;
  deptId: string | number;
  status: number | string;
  departName: string;
  roleName: string;
}

// 根据用户对象生成响应模型
export type UserDTO = BasicFetchResult<User>;
