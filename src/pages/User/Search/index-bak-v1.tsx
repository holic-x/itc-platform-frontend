import { PageContainer } from '@ant-design/pro-components';
import { history, Outlet, useLocation, useMatch } from '@umijs/max';
import { Input } from 'antd';
import type { FC } from 'react';
import React, { useState,useEffect} from 'react';



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

  // 定义全局搜索参数
  const [searchValue, setSearchValue] = useState<string>('');


  // 当inputValue变化时，更新URL的查询参数（这个仅更新URL）
  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: `?searchText=${encodeURIComponent(searchValue)}`,
    });
  }, [searchValue, history]);


  const location = useLocation();
  let match = useMatch(location.pathname);
  const handleTabChange = (key: string) => {
    const url =
      match?.pathname === '/' ? '' : match?.pathname.substring(0, match.pathname.lastIndexOf('/'));
    switch (key) {
      case 'articles':
        history.push(`${url}/articles`+ '?searchText=' + searchValue);
        break;
      case 'pictures':
        // history.push(`${url}/pictures`);
        history.push(`${url}/pictures`+ '?searchText=' + searchValue);
        break;
      case 'interfaces':
        history.push(`${url}/interfaces`+ '?searchText=' + searchValue);
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
    // eslint-disable-next-line no-console
    // console.log(value);
    // 设置当前的搜索值
    setSearchValue(value);


  };


  return (
    <PageContainer
      content={
        <div style={{ textAlign: 'center' }}>
          <Input.Search
            placeholder="请输入"
            enterButton="搜索"
            size="large"
            onSearch={handleFormSubmit}
            style={{ maxWidth: 522, width: '100%' }}
          />
          <p>输入的input：{searchValue}</p>
        </div>
      }
      tabList={tabList}
      tabActiveKey={getTabKey()}
      onTabChange={handleTabChange}
    >
      <Outlet />
    </PageContainer>
  );
};

export default Search;
