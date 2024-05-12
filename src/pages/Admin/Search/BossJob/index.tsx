import {PlusOutlined,ApiOutlined} from '@ant-design/icons';
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

// 引入岗位信息管理相关API
import {
  batchDeleteBossJobUsingPost,
  deleteBossJobUsingPost,
  listBossJobVoByPageUsingPost

} from '@/services/itc-platform/bossJobController';

const TableList: React.FC = () => {

  // 抽屉式弹窗（查看详情）
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 单选、多选
  const [currentRow, setCurrentRow] = useState<API.BossJobVO>();
  const [selectedRowsState, setSelectedRows] = useState<API.BossJobVO[]>([]);

  /**
   * 模拟数据抓取
   */
  const handleDataCapture = async () => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
  };

  /**
   * 删除节点
   */
  const handleRemove = async (record: API.DeleteRequest) => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    if (!record) return true;
    try {
      await deleteBossJobUsingPost({
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
      await batchDeleteBossJobUsingPost({
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
  const columns: ProColumns<API.BossJobVO>[] = [
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

    {
      title: '岗位名称',
      dataIndex: 'name',
      valueType: 'text',
      // ellipsis: true,
    },

    {
      title: '岗位地区',
      dataIndex: 'area',
      valueType: 'text',
      ellipsis: true,
    },

    {
      title: '薪资',
      dataIndex: 'salary',
      valueType: 'text',
    },

    {
      title: '公司名称',
      dataIndex: 'company',
      valueType: 'text',
      // ellipsis: true,
    },

    {
      title: '岗位描述',
      dataIndex: 'descr',
      render: (dom, entity) => {
        if (entity.descr.length > 10) {
          return <div title={entity.descr}>{entity.descr.slice(0, 10) + '...'}</div>;
        }
        return dom;
      },
      valueType: 'text'
    },

    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hidden: false,
      hideInSearch: true
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hidden: true,
      hideInSearch: true
    },

    // 接口信息管理操作配置定义
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
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
      <ProTable<API.BossJobVO, API.PageParams>
        headerTitle={'数据信息'}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        // 分页配置
        pagination={{
          pageSize: 10,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="dataCapture"
            onClick={() => {
              // 模拟抓取岗位信息
              handleDataCapture();
            }}
          >
            <PlusOutlined/> 抓取岗位信息
          </Button>,

        ]}
        // 原脚手架默认调用API接口 request={rule}；request={listInterfaceInfoByPageUsingPost}直接调用的话无法渲染，因为响应数据交互不匹配

        // 根据request规则，重新编写请求和响应处理
        request={async (params, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[] | null>) => {
          const res = await listBossJobVoByPageUsingPost({
            ...params
          })
          if (res?.data) {
            return {
              data: res?.data.records || [],
              success: true,
              total: res?.data.total,
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

      {/* 定义抽屉式弹窗：查看岗位信息详情 */}
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
          <ProDescriptions<API.BossJobVO>
            column={1}
            title={currentRow?.title}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.BossJobVO>[]}
          />
        )}
      </Drawer>

    </PageContainer>
  );
  // ------ end 组件定义 ------------

};

export default TableList;
