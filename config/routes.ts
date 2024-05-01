import { layout } from "@/app";

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './User/Login'},
      {name: '注册', path: '/user/register', component: './User/Register'},
    ],
  },

  // 账号信息相关
  {
    path: '/account',
    // layout: false, // 设置为false不引用任何样式，如果为true会自动嵌入导航栏，如果想自定义页面样式可以通过配置这个参数进行控制
    routes: [
      {name: '个人中心', path: '/account/center', component: './Account/Center'},
      {name: '个人设置', path: '/account/settings', component: './Account/Settings'},
    ],
  },

  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},

  // 管理员访问权限控制
  {
    path: '/admin',
    name: '后台管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        // 当前路径规则转发配置（/admin=》重定向到对应为止）
        path: '/admin', redirect: '/admin/sub-page'},
      // { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },

      // 基础信息板块
      {
        path: '/admin/base',
        name: '💼基础信息板块',
        routes: [
          // 当前路径配置转发规则
          {path: '/admin/base', redirect: '/admin/base/userInfo'},
          {path: '/admin/base/userInfo', name: '用户管理', component: './Admin/Base/UserInfo'},
          {path: '/admin/base/post', name: '文章管理', component: './Admin/Base/Post'},
          {path: '/admin/base/template', name: '模板管理', component: './Admin/Base/Template'},
          {path: '/admin/base/dataInfo', name: '数据管理', component: './Admin/Base/DataInfo'},
        ],
      },

      // 聚合搜索板块
      {
        path: '/admin/search',
        name: '🔎聚合搜索板块',
        routes: [
          // 当前路径配置转发规则
          {path: '/admin/search', redirect: '/admin/search/fetchPost'},
          {path: '/admin/search/fetchPost', name: '抓取文章信息管理', component: './Admin/Search/FetchPost'},
        ],
      },

      // API开放平台板块
      {
        path: '/admin/api',
        name: '🔗API开放平台板块',
        routes: [
          // 当前路径配置转发规则
          {path: '/admin/api', redirect: '/admin/api/interfaceInfo'},
          {path: '/admin/api/interfaceInfo', name: '接口信息管理', component: './Admin/Api/InterfaceInfo'},
          {path: '/admin/api/interfaceInfoStatistic', name: '接口数据统计', component: './Admin/Api/InterfaceInfoStatistic'},
        ],
      },

      // BI智能板块
      {
        path: '/admin/bi',        name: '📊BI智能板块',
        routes: [
          // 当前路径配置转发规则
          {path: '/admin/bi', redirect: '/admin/bi/chart'},
          {path: '/admin/bi/chart', name: '图表信息管理', component: './Admin/Bi/Chart'},
          {path: '/admin/bi/chartStatistic', name: '图表数据分析', component: './Admin/Bi/ChartStatistic'},
        ],
      },
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


  // {name: '查询表格', icon: 'table', path: '/mytable', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},



  // --------------- 用户主页可访问模块定义 ----------------
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
          {
            name: '接口检索',
            icon: 'smile',
            path: '/searchModule/search/interfaces',
            component: './User/Search/interfaces',
          },
        ],
      },
    ],
  },

  // API模块
  {
    path: '/apiModule',
    icon: 'table',
    name: 'API广场',
    routes: [
      {
        // todo 用户的API接口管理和后台共用页面，通过用户角色和数据状态限定操作权限和数据访问范围（不单独开页面，避免重复代码编写）
        path: '/apiModule/api/myApi',
        name: '🎰我的接口',
        component: './Admin/Api/InterfaceInfo',
      },

      {
        path: '/apiModule/api/onlineDebug',
        name: '🎰在线调试',
        component: './User/Api/OnlineDebug',
      },

    ],
  },

  // 智能报表模块
  {
    path: '/biModule',
    icon: 'table',
    name: '智能报表',
    routes: [
      {
        path: '/biModule/bi',
        name: '🎰智能分析',
        // component: './User/Bi',
        routes: [
          {
            path: '/biModule/bi',
            redirect: '/biModule/bi/analysis/base',
          },
          {
            name: '智能分析-基础版',
            icon: 'smile',
            path: '/biModule/bi/analysis/base',
            component: './User/Bi/Analysis/Base',
            // layout: false
          },
          {
            name: '智能分析-优化版',
            icon: 'smile',
            path: '/biModule/bi/analysis/asyncOptimize',
            component: './User/Bi/Analysis/AsyncOptimize',
            // layout: false
          },
        ],
      },

      {
        path: '/biModule/bi/myChart',
        name: '🎰我的图表',
        component: './User/Bi/MyChart',
      },

      /*
      {
        path: '/biModule/bi/chartStatistic',
        name: '🎰报表统计',
        component: './Admin/Bi/ChartStatistic',
      },
       */

    ],
  },

  {path: '/test',name:'测试', component: './User/Test'},


];
