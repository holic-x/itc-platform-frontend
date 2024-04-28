import {FileOutlined} from '@ant-design/icons';
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

// 引入图表信息管理相关API
import {
  deleteChartUsingPost,
  listChartByPageUsingPost,
} from '@/services/itc-platform/chartController';

const Index: React.FC = () => {

  // 抽屉式弹窗（查看详情）
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 单选、多选
  const [currentRow, setCurrentRow] = useState<API.Chart>();
  const [selectedRowsState, setSelectedRows] = useState<API.Chart[]>([]);

  /**
   * 获取数据统计信息
   */
  const handleFetchChartStatistic = async () => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    try {
      // 数据抓取操作

      // 模拟操作
      hide();
      // 操作成功提示
      message.success('成功获取数据统计....成功');
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('数据抓取失败，' + error.message);
      return false;
    }
  };

  /**
   * 重新生成调用AI接口生成图表信息 todo
   */
  const handleReGen = async (record: API.DeleteRequest) => {
    alert('重新生成调用AI接口生成图表信息 todo');
    /*
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    if (!record) return true;
    try {
      await deleteChartUsingPost({
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
      await deleteChartUsingPost({
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
      /*
      await batchDeleteChartUsingPost({
        // 根据id删除数据（将多选的id行封装为列表数据）
        idList: selectedRows.map((row) => row.id),
      });
      */

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
  const columns: ProColumns<API.Chart>[] = [
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
    // {
    //   title: '头像',
    //   dataIndex: 'userInfo',
    //   valueType: 'image',
    //   // renderText: (val) => `${JSON.parse(val).id}`,
    //   renderText:
    //     (text) => {
    //       const jsonObj = JSON.parse(text);
    //       return jsonObj.userAvatar;
    //     }
    //   ,
    //   hideInSearch: true,
    // },
    //
    // {
    //   title: '创建者',
    //   dataIndex: 'userName',
    //   valueType: 'text',
    // },

    {
      title: '图表标题',
      dataIndex: 'name',
      valueType: 'text',
      // ellipsis: true,
    },

    {
      title: '分析目标',
      dataIndex: 'goal',
      valueType: 'text',
      // ellipsis: true,
    },

    {
      title: '图表类型',
      dataIndex: 'chartType',
      valueType: 'text',
      // ellipsis: true,
    },

    {
      title: '数据列表',
      dataIndex: 'chartData',
      valueType: 'text',
      ellipsis: true,
    },


    {
      title: '生成结果',
      dataIndex: 'genChart',
      valueType: 'text',
      ellipsis: true,
    },


    {
      title: '图表状态',
      dataIndex: 'status',
      valueEnum: {
        'wait': {
          text: '排队等待生成中',
          status: 'Default',
        },
        'failed': {
          text: '生成失败',
          status: 'Processing',
        },
        'succeed': {
          text: '生成成功',
          status: 'Processing',
        },
      },
      hideInForm: true
    },

    {
      title: '执行信息',
      dataIndex: 'execMessage',
      valueType: 'text',
      // ellipsis: true,
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
        // 如果图表生成失败则再次发起请求生成
        record.status === 'failed' ?
          // todo 重新生成信息（异常数据统计、查看异常信息等 ）
          <a key="publish"
             onClick={() => {
               handleReGen(record);
             }}>
            重新生成
          </a>
          : null,

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
      <ProTable<API.Chart, API.PageParams>
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
              // 模拟抓取图表信息  todo 额外功能扩展：可以分析图表视图（弹窗：成功、失败统计等）
              handleFetchChartStatistic();
            }}
          >
            <FileOutlined/> 数据统计
          </Button>,
        ]}
        // 原脚手架默认调用API接口 request={rule}；request={listInterfaceInfoByPageUsingPost}直接调用的话无法渲染，因为响应数据交互不匹配

        // 根据request规则，重新编写请求和响应处理
        request={async (params, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[] | null>) => {
          const res = await listChartByPageUsingPost({
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
                {/*阅读数共 {selectedRowsState.reduce((pre, item) => pre + item.viewNum!, 0)} 次*/}
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

      {/* 定义抽屉式弹窗：查看图表信息详情 */}
      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.Chart>
            column={1}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.Chart>[]}
          />
        )}
      </Drawer>

    </PageContainer>
  );
  // ------ end 组件定义 ------------

};

export default Index;
