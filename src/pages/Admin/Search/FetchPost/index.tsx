import {PlusOutlined} from '@ant-design/icons';
import type {ActionType, ProColumns, ProDescriptionsItemProps} from '@ant-design/pro-components';
import {
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProTable
} from '@ant-design/pro-components';
import '@umijs/max';
import {Button, Drawer, message, Tag, Select} from 'antd';
import React, {useRef, useState} from 'react';

// 引入文章信息管理相关API
import {
  batchDeleteFetchPostUsingPost,
  deleteFetchPostUsingPost,
  listFetchPostVoByPageForAdminUsingPost,
  dataCaptureUsingPost
} from '@/services/itc-platform/fetchPostController';

const TableList: React.FC = () => {

  // 抽屉式弹窗（查看详情）
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 单选、多选
  const [currentRow, setCurrentRow] = useState<API.FetchPostVO>();
  const [selectedRowsState, setSelectedRows] = useState<API.FetchPostVO[]>([]);

  /**
   * 模拟数据抓取
   */
  const handleDataCapture = async () => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    try {
      // 数据抓取操作
      await dataCaptureUsingPost();
      hide();
      // 操作成功提示
      message.success('数据抓取成功');
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('数据抓取失败，' + error.message);
      return false;
    }
  };

  /**
   * 推送文章数据（推到ES：todo）
   */
  const handlePush = async (record: API.DeleteRequest) => {
    alert('推送数据处理 todo');
    /*
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    if (!record) return true;
    try {
      await deleteFetchPostUsingPost({
        // 根据id删除数据
        id: record.id
      });
      hide();
      // 操作成功提示信息
      message.success('删除成功');
      // 操作成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('删除失败，' + error.message);
      return false;
    }
     */
  };


  /**
   * 删除节点
   */
  const handleRemove = async (record: API.DeleteRequest) => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    if (!record) return true;
    try {
      await deleteFetchPostUsingPost({
        // 根据id删除数据
        id: record.id
      });
      hide();
      // 操作成功提示信息
      message.success('删除成功');
      // 操作成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('删除失败，' + error.message);
      return false;
    }
  };


  /**
   * 批量删除节点
   */
  const handleBatchRemove = async (selectedRows: API.BatchDeleteRequest) => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    // 如果当前没有选择则返回（不执行任何操作）
    if (!selectedRows) return true;
    console.log('当前选中行数据：', selectedRows);
    // 执行删除操作
    try {
      await batchDeleteFetchPostUsingPost({
        // 根据id删除数据（将多选的id行封装为列表数据）
        idList: selectedRows.map((row) => row.id),
      });

      hide();
      // 操作成功提示信息
      message.success('删除成功');
      // 操作成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('删除失败，' + error.message);
      return false;
    }
  };

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
                    record.tagList.map((name) => (
                      <Tag color="blue" key={name}>
                        {name}
                      </Tag>
                    ))
                  }
                </span>
      ),
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
      title: '文章状态',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: '初始化',
          status: 'Default',
        },
        1: {
          text: '待同步',
          status: 'Processing',
        },
      },
      hideInForm: true
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
        record.status === 0 ?
          <a key="publish"
             onClick={() => {
               handlePush(record);
             }}>
            推送
          </a> : null,

        <a key="delete"
           onClick={() => {
             // 触发删除操作
             handleRemove(record);
           }}>
          删除
        </a>,

      ],
    },
  ];

  // ------ start 组件定义 ------------
  return (
    <PageContainer>
      <ProTable<API.FetchPostVO, API.PageParams>
        headerTitle={'数据信息'}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="dataCapture"
            onClick={() => {
              // 模拟抓取文章信息
              handleDataCapture();
            }}
          >
            <PlusOutlined/> 抓取文章
          </Button>,
        ]}
        // 原脚手架默认调用API接口 request={rule}；request={listInterfaceInfoByPageUsingPost}直接调用的话无法渲染，因为响应数据交互不匹配

        // 根据request规则，重新编写请求和响应处理
        request={async (params, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[] | null>) => {
          const res = await listFetchPostVoByPageForAdminUsingPost({
            tags: params.tagList,
            ...params
          })
          if (res?.data) {
            return {
              data: res?.data.records || [],
              success: true,
              total: res.total,
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

      {
        // 如果多选选择，则显示操作栏
        selectedRowsState?.length > 0 && (
          <FooterToolbar
            extra={
              <div>
                已选择{' '}
                <a
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {selectedRowsState.length}
                </a>{' '}
                项 &nbsp;&nbsp;
                <span>
                阅读数共 {selectedRowsState.reduce((pre, item) => pre + item.viewNum!, 0)} 次
                点赞数共 {selectedRowsState.reduce((pre, item) => pre + item.thumbNum!, 0)} 次
                收藏数共 {selectedRowsState.reduce((pre, item) => pre + item.favourNum!, 0)} 次
                评论数共 {selectedRowsState.reduce((pre, item) => pre + item.commentNum!, 0)} 次
              </span>
              </div>
            }
          >
            <Button
              onClick={async () => {
                // 批量操作
                await handleBatchRemove(selectedRowsState);
                // 操作成功清空多选
                setSelectedRows([]);
                // 重置表单
                actionRef.current?.reloadAndRest?.();
              }}
            >
              批量删除
            </Button>
            {/* <Button type="primary">批量操作</Button> */}
          </FooterToolbar>
        )}

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
          <ProDescriptions<API.FetchPostVO>
            column={1}
            title={currentRow?.title}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.FetchPostVO>[]}
          />
        )}
      </Drawer>

    </PageContainer>
  );
  // ------ end 组件定义 ------------

};

export default TableList;
