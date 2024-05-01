import type {ActionType, ProColumns, ProDescriptionsItemProps} from '@ant-design/pro-components';
import {ProDescriptions, ProTable} from '@ant-design/pro-components';
import '@umijs/max';
import {Drawer, Tag} from 'antd';
import React, {useRef, useState} from 'react';

// 引入文章信息管理相关API
import {listFetchPostVoByPageForUserUsingPost,} from '@/services/itc-platform/fetchPostController';
import {searchAllByCondAdaptorUsingPost} from "@/services/itc-platform/searchOptimizeController";

const TableList: React.FC = () => {

  // 定义全局搜索参数
  const searchParams = new URLSearchParams(location.search);
  const searchText = searchParams.get('searchText');
  const searchParam = {
    searchText: searchText,
    searchType: 'articles',
  };

  // 抽屉式弹窗（查看详情）
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 单选、多选
  const [currentRow, setCurrentRow] = useState<API.FetchPostVO>();
  const [selectedRowsState, setSelectedRows] = useState<API.FetchPostVO[]>([]);

  // 列表信息定义
  const columns: ProColumns<API.FetchPostVO>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'index',
      // tip: 'The rule name is the unique key',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },


    // 解析JSON字符串的userInfo
    {
      title: '头像',
      dataIndex: 'userInfo',
      valueType: 'image',
      // renderText: (val) => `${JSON.parse(val).id}`,
      renderText:
        (text) => {
          const jsonObj = JSON.parse(text);
          return jsonObj.userAvatar;
        }
      ,
      hideInSearch: true,
    },


    {
      title: '创建者',
      dataIndex: 'userName',
      valueType: 'text',
    },

    {
      title: '文章标题',
      dataIndex: 'title',
      valueType: 'text',
      ellipsis: true,
    },

    {
      title: '标签列表',
      dataIndex: 'tagList',
      valueType: 'select', // 列表形式["java","php","ant design pro"]
      // 渲染文本
      render: (_, record) => (
        <span>
                  {
                    // JSON.parse(record.tags).map((name) => ()  如果是字符串格式的tags则可通过JSON解析处理，或者直接用后台处理好的tagList
                    record.tagList.map((name) => (
                      <Tag color="blue" key={name}>
                        {name}
                      </Tag>
                    ))
                  }
                </span>
      ),
      hideInSearch: true,
    },

    {
      title: '文章内容',
      dataIndex: 'content',
      render: (dom, entity) => {
        if (entity.content.length > 10) {
          return <div title={entity.content}>{entity.content.slice(0, 10) + '...'}</div>;
        }
        return dom;
      },
      valueType: 'text'
    },

    {
      title: '阅读数',
      dataIndex: 'viewNum',
      valueType: 'text',
      renderText: (val) => `${val}次`,
      hideInSearch: true
    },

    {
      title: '点赞数',
      dataIndex: 'thumbNum',
      valueType: 'text',
      renderText: (val) => `${val}次`,
      hideInSearch: true
    },

    {
      title: '评论数',
      dataIndex: 'commentNum',
      valueType: 'text',
      renderText: (val) => `${val}次`,
      hideInSearch: true
    },

    {
      title: '阅读数',
      dataIndex: 'viewNum',
      valueType: 'text',
      renderText: (val) => `${val}次`,
      hideInSearch: true
    },

    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hidden: false
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hidden: true,
    },
    // 接口信息管理操作配置定义
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [

        <a key="showDetail"
           onClick={() => {
             // 触发操作
             setCurrentRow(record);
             setShowDetail(true);
           }}>
          查看
        </a>,

      ],
    },
  ];

  // ------ start 组件定义 ------------
  return (
    <div>
      <ProTable<API.FetchPostVO, API.PageParams>
        headerTitle={'数据信息'}
        actionRef={actionRef}
        rowKey="id"
        // 设置无搜索栏的表格（去除搜索框）
        search = {false}
        /*
        search={{
          labelWidth: 120,
        }}
        */
        toolBarRender={() => [
          // 操作栏定义
        ]}
        // 原脚手架默认调用API接口 request={rule}；request={listInterfaceInfoByPageUsingPost}直接调用的话无法渲染，因为响应数据交互不匹配

        // 根据request规则，重新编写请求和响应处理
        request={async (params, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[] | null>) => {
          // 调用数据库获取数据
          // const res = await listFetchPostVoByPageForUserUsingPost({
          //   ...params,
          //   searchParam
          // })
          // if (res?.data) {
          //   return {
          //     data: res?.data.records || [],
          //     success: true,
          //     total: res.total,
          //   }
          // }

          // 调用聚合接口（从ES中获取数据）
          const res = await searchAllByCondAdaptorUsingPost({
            ...params,
            "searchText": searchParam.searchText,
            "searchType": "articles",
          })


          if (res?.data) {
            return {
              data: res?.data.dataList || [],
              success: true,
              total: res.dataList,
            }
          }


        }}

        // 列属性定义
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />


      {/* 定义抽屉式弹窗：查看文章信息详情 */}
      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.title && (
          <ProDescriptions<API.FetchPost>
            column={1}
            title={currentRow?.title}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.FetchPost>[]}
          />
        )}
      </Drawer>
    </div>
  );
  // ------ end 组件定义 ------------

};

export default TableList;
