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

// 引入公告信息管理相关API
import { addNotificationUsingPost, batchDeleteNotificationUsingPost, deleteNotificationUsingPost, handleNotificationStatusUsingPost, updateNotificationUsingPost,getNotificationVoByPageUsingPost } from '@/services/itc-platform/notificationController';

// 接入自定义模态框或组件（新增、修改）
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';

const TableList: React.FC = () => {


  // 新增窗口的弹窗
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  // 更新窗口的弹窗
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  // 抽屉式弹窗（查看详情）
  const [showDetail, setShowDetail] = useState<boolean>(false);
  // 设置表格引用
  const actionRef = useRef<ActionType>();
  // 单选、多选
  const [currentRow, setCurrentRow] = useState<API.NotificationVO>();
  const [selectedRowsState, setSelectedRows] = useState<API.NotificationVO[]>([]);


  /**
   * 添加节点
   */
  const handleAdd = async (fields: API.NotificationAddRequest) => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    try {
      // 添加操作
      await addNotificationUsingPost({
        ...fields,
      });
      hide();
      // 更新表单数据
      actionRef.current.reload();
      // 操作成功提示
      message.success('新增成功');
      // 操作成功则关闭这个模态框
      handleModalOpen(false);
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('新增失败，' + error.message);
      return false;
    }
  };

  /**
   * 更新节点
   */
  const handleUpdate = async (fields: API.NotificationUpdateRequest) => {
    // 如果没有选中行直接返回
    if(!currentRow){
      return ;
    }
    const hide = message.loading('正在请求操作...');
    try {
      // 调用后台接口执行修改操作
      await updateNotificationUsingPost({
        id: currentRow.id,
        // tags: fields.tagList,
        // tags: currentRow.tagList,
        ...fields,
      });
      hide();
      // 操作成功提示信息
      message.success('更新成功');
      return true;
    } catch (error:any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('更新失败，'+error.message);
      return false;
    }
  };

  /**
   * 删除节点
   */
  const handleRemove = async (record: API.DeleteRequest) => {
    // 设置加载提示
    const hide = message.loading('正在请求操作...');
    if (!record) return true;
    try {
      await deleteNotificationUsingPost({
        // 根据id删除公告
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
   * 发布公告
   */
  const handlePublish = async (record: API.NotificationStatusUpdateRequest) => {
    // 设置加载中的提示为'正在处理'
    const hide = message.loading('正在处理');
    if (!record) return true;
    try {
      // 调用接口
      await handleNotificationStatusUsingPost({
        id: record.id,
        operType: 'publish'
      });
      hide();
      // 如果调用成功会提示'处理成功'
      message.success('发布成功');
      // 处理成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('发布失败，' + error.message);
      return false;
    }
  };

  /**
   * 暂存（下架）
   */
  const handleDraft = async (record: API.NotificationStatusUpdateRequest) => {
    // 设置加载中的提示为'正在处理'
    const hide = message.loading('正在处理');
    if (!record) return true;
    try {
      // 调用接口
      await handleNotificationStatusUsingPost({
        id: record.id,
        operType: 'draft'
      });
      hide();
      // 如果调用成功会提示'处理成功'
      message.success('下架成功');
      // 处理成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('下架失败，' + error.message);
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
      await batchDeleteNotificationUsingPost({
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
  const columns: ProColumns<API.NotificationVO>[] = [
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
    /*
    {
      title: '数据类型',
      dataIndex: 'dataType',
      valueType: 'text',
      // 渲染表单项
      renderFormItem: () => {
        return (
          <Select
            // onChange={() => onSelectChange(row)}
            // onClick={() => showSalespersonModal(row)}
            options={[{ label: '类型1', value: '1' },{ label: '类型2', value: '2' },{ label: '类型3', value: '3' },{ label: '类型4', value: '4' }]}
          />
        );
      },
      formItemProps:{
        rules:[{
          required:true, // 设置必填项
          message:"请输入", // 设置提示信息
        }]
      },
      // renderText: (val) => `${val}`  ,
      render: (val) => (
        <Tag color="blue" key={val}>
          {val}
        </Tag>
      )
    },

     */

    {
      title: '通知标题',
      dataIndex: 'title',
      valueType: 'text',
      formItemProps:{
        rules:[{
          required:true, // 设置必填项
          message:"请输入", // 设置提示信息
        }]
      }
    },
    {
      title: '通知内容',
      dataIndex: 'content',
      valueType: 'text',
      formItemProps:{
        rules:[{
          required:true, // 设置必填项
          message:"请输入", // 设置提示信息
        }]
      }
    },

    {
      title: '生效域名',
      dataIndex: 'domain',
      valueType: 'text',
      formItemProps:{
        rules:[{
          required:true, // 设置必填项
          message:"请输入", // 设置提示信息
        }]
      }
    },

    {
      title: '创建者',
      // dataIndex: 'userId',
      dataIndex: 'createrUserName',
      // dataIndex: 'creater',
      // renderText: (val) => `${val.userName}` ,
      valueType: 'text',
      hideInForm: true,
      hideInSearch: true
    },
    {
      title: '修改者',
      // dataIndex: 'userId',
      dataIndex: 'updaterUserName',
      // dataIndex: 'updater',
      // renderText: (val) => `${val.userName}` ,
      valueType: 'text',
      hideInForm: true,
      hideInSearch: true
    },

    {
      title: '通知状态',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '开启',
          status: 'Processing',
        },
      },
      hideInForm: true
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInForm:true, // 在表单组件中隐藏
      hideInSearch: true, // 在搜索组件中隐藏
      hidden: false
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInForm:true, // 在表单组件中隐藏
      hideInSearch: true, // 在搜索组件中隐藏
    },
    // 接口信息管理操作配置定义
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="operate"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,

        record.status===0?
          <a key="publish"
             onClick={()=>{
               handlePublish(record);
             }}>
            发布
          </a>:null,

        record.status===1?
          <a key="draft"
             onClick={()=>{
               handleDraft(record);
             }}>
            回收
          </a>:null,

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
      <ProTable<API.NotificationVO, API.PageParams>
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
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> 新增
          </Button>,
        ]}
        // 原脚手架默认调用API接口 request={rule}；request={listInterfaceInfoByPageUsingPost}直接调用的话无法渲染，因为响应数据交互不匹配

        // 根据request规则，重新编写请求和响应处理
        request={async (params, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[] | null>) => {
          // 方式1：queryWrapper封装
          // const res = await listNotificationVoByPageUsingPost({
          //   ...params
          // })

          // 方式2：自定义SQL关联
          const res = await getNotificationVoByPageUsingPost({
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

      <UpdateModal columns={columns}
                   onSubmit={async (value) => {
                     const success = await handleUpdate(value);
                     if (success) {
                       handleUpdateModalOpen(false);
                       setCurrentRow(undefined);
                       if (actionRef.current) {
                         actionRef.current.reload();
                       }
                     }
                   }}
                   onCancel={() => {
                     handleUpdateModalOpen(false);
                     if (!showDetail) {
                       setCurrentRow(undefined);
                     }
                   }}
        // 传递信息修改为visible
                   visible={ updateModalOpen }
                   values={currentRow || {}}
      />

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
          <ProDescriptions<API.NotificationVO>
            column={1}
            title={currentRow?.dataName}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.NotificationVO>[]}
          />
        )}
      </Drawer>


      {/* 创建一个CreateModal组件，用于在点击新增按钮时弹出 */}
      <CreateModal
        columns={columns}
        // 当取消按钮被点击时,设置更新模态框为false以隐藏模态窗口
        onCancel={() => {
          handleModalOpen(false);
        }}
        // 当用户点击提交按钮之后，调用handleAdd函数处理提交的数据，去请求后端添加数据(这里的报错不用管,可能里面组件的属性和外层的不一致)
        onSubmit={(values) => {
          handleAdd(values);
        }}
        // 根据更新窗口的值决定模态窗口是否显示
        visible={createModalOpen}
      />

    </PageContainer>
  );
  // ------ end 组件定义 ------------

};

export default TableList;
