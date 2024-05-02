import {PageContainer} from '@ant-design/pro-components';
import {history, Outlet, useLocation, useMatch} from '@umijs/max';
import {Input} from 'antd';
import type {FC} from 'react';
import React, {useState,useEffect} from 'react';


type SearchProps = {
  children?: React.ReactNode;
};


const tabList = [
  {
    key: 'articles',
    tab: '文章',
  },
  {
    key: 'pictures',
    tab: '图片',
  },
  {
    key: 'interfaces',
    tab: 'API广场',
  },
];

const Search: FC<SearchProps> = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // 定义全局搜索参数（初始化为从URL中获取的参数）
  const [searchValue, setSearchValue] = useState(() => {
    return searchParams.get('searchText') || '';
  });

  let match = useMatch(location.pathname);
  const handleTabChange = (key: string) => {
    const url =
      match?.pathname === '/' ? '' : match?.pathname.substring(0, match.pathname.lastIndexOf('/'));
    switch (key) {
      case 'articles':
        history.push(`${url}/articles` + '?searchText=' + searchValue);
        break;
      case 'pictures':
        // history.push(`${url}/pictures`);
        history.push(`${url}/pictures` + '?searchText=' + searchValue);
        break;
      case 'interfaces':
        history.push(`${url}/interfaces` + '?searchText=' + searchValue);
        break;
      default:
        console.log('错误参数');
        break;
    }
  };

  const getTabKey = () => {
    const tabKey = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    if (tabKey && tabKey !== '/') {
      return tabKey;
    }
    return 'articles';
  };

  const handleFormSubmit = (value: string) => {
    // console.log(value);
    // 设置当前的搜索值
    setSearchValue(value);
    // handleTabChange('pictures');  按钮点击一次无响应、点击第二次url变化但是没有筛选结果

    // 跳转指定路径
    const url =
      match?.pathname === '/' ? '' : match?.pathname.substring(0, match.pathname.lastIndexOf('/'));
    // history.push(`${url}/${getTabKey()}`+ '?searchText=' + value);// push 只改变了参数 页面不刷新（如果不是切换tab的话url不变）
    // window.location.reload();  // 刷新页面

    window.location.href = `${url}/${getTabKey()}` + '?searchText=' + value;
  };

  return (
    <PageContainer
      content={
        <div style={{textAlign: 'center'}}>
          <Input.Search
            placeholder="请输入"
            enterButton="搜索"
            size="large"
            onSearch={handleFormSubmit}
            style={{maxWidth: 522, width: '100%'}}
            defaultValue={searchValue} // 此处不能用value，会被绑定（初始值设定即可）
          />
          <p>search参数监控：{searchValue}</p>
        </div>
      }
      tabList={tabList}
      tabActiveKey={getTabKey()}
      onTabChange={handleTabChange}
    >
      <Outlet/>
    </PageContainer>
  );
};

export default Search;
