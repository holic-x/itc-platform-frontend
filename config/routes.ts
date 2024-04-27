export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './User/Login'},
      {name: '注册', path: '/user/register', component: './User/Register'}
    ],
  },
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},

  // 管理员访问权限控制
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {path: '/admin', redirect: '/admin/sub-page'},
      // { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
      {path: '/admin/userInfo', name: '用户管理', component: './Admin/UserInfo'},
      {path: '/admin/post', name: '文章管理', component: './Admin/Post'},
      {path: '/admin/template', name: '模板管理', component: './Admin/Template'},
      {path: '/admin/dataInfo', name: '数据管理', component: './Admin/DataInfo'},

    ],
  },

  // 超级管理员访问权限控制
  {
    path: '/supAdmin',
    name: '超级管理员',
    icon: 'crown',
    access: 'canSupAdmin',
    routes: [
      {path: '/supAdmin', redirect: '/supAdmin/sub-page'},
      {path: '/supAdmin/sub-page', name: '二级管理页', component: './SupAdmin'},
    ],
  },


  {name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
];
