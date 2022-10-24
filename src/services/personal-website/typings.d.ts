declare namespace API {
  type ApiResponse = {
    /** 状态码
Required: true
Example: 200 */
    code?: string;
    /** 返回数据
Required: true */
    data?: any;
    /** 错误信息
Required: true
Example: this is error */
    message?: string;
    /** 是否成功
Required: true
Example: true */
    success?: boolean;
  };

  type Blog = {
    /** 内容
Required: true
Example: This is content */
    content?: string;
    /** ID
Required: true
Example: 1 */
    id?: number;
    /** 标题
Required: true
Example: My blog */
    title?: string;
  };

  type CreateBlogRequest = {
    /** 内容
Required: true
Example: This is content */
    content: string;
    /** 标题
Required: true
Example: My blog */
    title: string;
  };

  type DeleteBlogRequest = {
    /** ID
Required: true
Example: 1 */
    id: number;
  };

  type ListBlogsRequest = {
    /** 页码
Required: true
Example: 1 */
    pageNumber: number;
    /** 页大小
Required: true
Example: 10 */
    pageSize: number;
    /** 标题
Required: false'
Example: My blog */
    title?: string;
  };

  type LoginUserRequest = {
    /** 密码
Required: true
Example: 123456 */
    password: string;
    /** 用户名
Required: true
Example: rex */
    username: string;
  };

  type RegisterUserRequest = {
    /** 密码
Required: true
Example: 123456 */
    password: string;
    /** 用户名
Required: true
Example: rex */
    username: string;
  };

  type Result = {
    /** 页码
Required: true
Example: 1 */
    PageNumber?: number;
    /** 返回数据
Required: true */
    data?: any;
    /** 页大小
Required: true
Example: 10 */
    pageSize?: number;
    /** 总数
Required: true
Example: 100 */
    totalCount?: number;
  };

  type User = {
    /** ID
Required: true
Example: 1 */
    id?: number;
    /** 昵称
Required: true
Example: rex */
    nickName?: string;
    /** 角色
Required: true
Example: 1 */
    role?: number;
  };
}
