import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProTable
} from '@ant-design/pro-components';
import '@umijs/max';
import { Button, Drawer, message,Tag ,Select} from 'antd';
import React, { useRef, useState } from 'react';

// 引入用户签到信息管理相关API
import { deleteUserSignUsingPost,batchDeleteUserSignUsingPost,listUserSignVoByPageUsingPost} from '@/services/itc-platform/userSignController';


const TableList: React.FC = () => {

  // 抽屉式弹窗（查看详情）
  const [showDetail, setShowDetail] = useState<boolean>(false);
  // 设置表格引用
  const actionRef = useRef<ActionType>();
  // 单选、多选
  const [currentRow, setCurrentRow] = useState<API.UserSignVO>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserSignVO[]>([]);

  /**
   * 删除节点
   */
  const handleRemove = async (record: API.DeleteRequest) => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    if (!record) return true;
    try {
      await deleteUserSignUsingPost({
        // 根据id删除用户签到
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
    console.log('当前选中行数据：',selectedRows);
    // 执行删除操作
    try {
      await batchDeleteUserSignUsingPost({
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
  const columns: ProColumns<API.UserSignVO>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType:'index',
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
      title: '签到用户',
      dataIndex: 'uname',
      valueType: 'text'
    },
    {
      title: '签到标题',
      dataIndex: 'title',
      valueType: 'text'
    },

    {
      title: '签到时间',
      dataIndex: 'signInTime',
      valueType: 'dateTime',
      hideInSearch: true
    },

    {
      title: '签到渠道',
      dataIndex: 'signInChannel',
      valueType: 'text'
    },
    {
      title: '签到积分',
      dataIndex: 'score',
      valueType: 'text'
    },
    // 接口信息管理操作配置定义
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a key="delete"
           onClick={()=>{
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
      <ProTable<API.UserSignVO, API.PageParams>
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
          // <Button
          //   type="primary"
          //   key="primary"
          //   onClick={() => {
          //     handleModalOpen(true);
          //   }}
          // >
          //   <PlusOutlined /> 新增
          // </Button>,
        ]}
        // 原脚手架默认调用API接口 request={rule}；request={listInterfaceInfoByPageUsingPost}直接调用的话无法渲染，因为响应数据交互不匹配

        // 根据request规则，重新编写请求和响应处理
        request={async (params, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[] | null>) => {
          // 方式1：queryWrapper封装
          // const res = await listUserSignVoByPageUsingPost({
          //   ...params
          // })

          // 方式2：自定义SQL关联
          const res = await listUserSignVoByPageUsingPost({
            ...params
          })

          if (res?.data) {
            return  {
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
          <FooterToolbar>
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


      {/* 定义抽屉式弹窗：查看数据信息详情 */}
      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.id && (
          <ProDescriptions<API.UserSignVO>
            column={1}
            title={currentRow?.dataName}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.UserSignVO>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
  // ------ end 组件定义 ------------

};

export default TableList;
