export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './User/Login'},
      {name: '注册', path: '/user/register', component: './User/Register'},
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
      {path: '/admin/search/fetchPost', name: '抓取文章信息管理', component: './Admin/Search/FetchPost'},
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


  {name: '查询表格', icon: 'table', path: '/mytable', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},


  // {name: '搜索模块', icon: 'table', path: '/user/search', component: './User/Search'},

  // 搜索模块定义(权限控制)
  // {
  //   path: '/search',
  //   routes: [
  //     {name: '聚合搜索',  path: '/search',component: './User/Search'},
  //   ],
  // },

  // 聚合搜索模块
  {
    path: '/searchModule',
    icon: 'table',
    name: '聚合搜索',
    routes: [
      {
        path: '/searchModule/search',
        name: '数据检索',
        component: './User/Search',
        routes: [
          {
            path: '/searchModule/search',
            redirect: '/searchModule/search/articles',
          },
          {
            name: '用户检索',
            icon: 'smile',
            path: '/searchModule/search/users',
            component: './User/Search/users',
          },
          {
            name: '图片检索',
            icon: 'smile',
            path: '/searchModule/search/pictures',
            component: './User/Search/pictures',
          },
          {
            name: '文章检索',
            icon: 'smile',
            path: '/searchModule/search/articles',
            component: './User/Search/articles',
          },
        ],
      },
    ],
  },




  {
    path: '/list',
    icon: 'table',
    name: '模拟数据',
    routes: [
      {
        path: '/list/search',
        name: '数据检索',
        component: './Mod/Search',
        routes: [
          {
            path: '/list/search',
            redirect: '/list/search/articles',
          },
          {
            name: '文章检索',
            icon: 'smile',
            path: '/list/search/articles',
            component: './Mod/Search/articles',
          },
          {
            name: '项目检索',
            icon: 'smile',
            path: '/list/search/projects',
            component: './Mod/Search/projects',
          },
          {
            name: '应用检索',
            icon: 'smile',
            path: '/list/search/applications',
            component: './Mod/Search/applications',
          },
        ],
      },
    ],
  },





];
