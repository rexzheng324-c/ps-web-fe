// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建一个博客 创建一个博客 POST /api/v1/blog/create */
export async function postBlogCreate(
  body: API.CreateBlogRequest,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponse>('/api/v1/blog/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除一个博客 删除一个博客 POST /api/v1/blog/delete */
export async function postBlog__openAPI__delete(
  body: API.DeleteBlogRequest,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponse>('/api/v1/blog/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 条件查询博客 条件查询博客 POST /api/v1/blog/list */
export async function postBlogList(body: API.ListBlogsRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponse & { data?: API.Result & { data?: API.Blog[] } }>(
    '/api/v1/blog/list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
