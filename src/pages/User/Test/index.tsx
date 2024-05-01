import React, { useState } from 'react';
import { Input, Tabs } from 'antd';
import { PageContainer, } from '@ant-design/pro-layout';
import { ProTable } from '@ant-design/pro-table';
import {searchAllByCondAdaptorUsingPost} from "@/services/itc-platform/searchOptimizeController";

const Test = () => {

  const [params,setParams] = useState({
    searchText:'小黑子',
    searchType:'pictures'
  });

  const columns = [
    {
      title: '图片',
      dataIndex: 'image',
      render: (dom, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={record.url} alt={record.title} style={{ width: 50, height: 50, marginRight: 10 }} />
          <div>{record.title}</div>
        </div>
      ),
    },
    // 其他需要显示的字段...
  ];


  return (
    <PageContainer>
      <ProTable
        columns={columns}
        request={async (params, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[] | null>) => {
          const res = await searchAllByCondAdaptorUsingPost({
            ...params,
            searchText:'小黑子',
            searchType:'pictures'
          })
          if (res?.data) {
            return  {
              data: res?.data.dataList || [],
              success: true,
              total: 10,
            }
          }
        }}

        rowKey="key" // 确保每行数据有唯一的 key
        pagination={{
          pageSize: 10, // 每页显示的数据量
          // 其他分页属性...
        }}
        // 其他 ProTable 属性...
      />

    </PageContainer>
  );
};

export default Test;
