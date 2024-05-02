import React, { useState } from 'react';
import { Input, Tabs } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';


const { TabPane } = Tabs;

const YourComponent = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // 根据搜索框的值来定义标签页的内容
  const tabList = [
    {
      key: 'all',
      tab: '全部',
    },
    {
      key: 'search',
      tab: '搜索结果',
    },
  ];

  return (
    <PageContainer
      // tabList={tabList}
      // 根据搜索值显示对应的标签页内容
    >
      <Input.Search onChange={onSearchChange} placeholder="搜索" />
      <Tabs defaultActiveKey={searchValue ? 'search' : 'all'}>
        <TabPane tab="文章检索" key="all">
          {!searchValue && <p>显示全部内容</p>}
        </TabPane>
        <TabPane tab="图片检索" key="search">
          {searchValue && <p>显示搜索结果：{searchValue}</p>}
        </TabPane>
      </Tabs>
    </PageContainer>
  );
};

export default YourComponent;
