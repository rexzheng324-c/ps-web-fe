export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'auth',
        path: '/user/login',
        component: './User/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '博客',
    icon: 'table',
    path: '/blog',
    component: './Blog',
  },
  {
    name: '个人简历',
    icon: 'ContactsOutlined',
    path: '/resume',
    component: './Blog',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
