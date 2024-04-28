import {PlusOutlined} from '@ant-design/icons';
import type {ActionType, ProColumns, ProDescriptionsItemProps} from '@ant-design/pro-components';
import {FooterToolbar, PageContainer, ProDescriptions, ProTable,} from '@ant-design/pro-components';
import '@umijs/max';
import {Button, Drawer, message} from 'antd';
import React, {useRef, useState} from 'react';
import type {FormValueType} from './components/UpdateForm';

// 接入自定义模态框或组件
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';


// 引入接口信息管理相关API
import {
  addInterfaceInfoUsingPost,
  deleteInterfaceInfoUsingPost,
  listInterfaceInfoByPageUsingPost,
  offlineInterfaceInfoUsingPost,
  onlineInterfaceInfoUsingPost,
  updateInterfaceInfoUsingPost
} from '@/services/itc-platform/interfaceInfoController';


const TableList: React.FC = () => {
  /**
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.InterfaceInfo>();
  const [selectedRowsState, setSelectedRows] = useState<API.InterfaceInfo[]>([]);


  /**
   * @zh-CN 添加节点
   * @param fields
   */
// 把参数的类型改成InterfaceInfo
  const handleAdd = async (fields: API.InterfaceInfo) => {

    const hide = message.loading('正在添加');
    try {
      // 把addRule改成addInterfaceInfoUsingPOST
      await addInterfaceInfoUsingPost({
        ...fields,
      });
      hide();
      // 如果调用成功会提示'创建成功'
      message.success('创建成功');
      // 创建成功就关闭这个模态框
      handleModalOpen(false);
      return true;
    } catch (error: any) {
      hide();
      // 否则提示'创建失败' + 报错信息
      message.error('创建失败，' + error.message);
      return false;
    }

  };

  /**
   * @zh-CN 更新节点
   * @param fields
   */
  const handleUpdate = async (fields: FormValueType) => {
    // 如果没有选中行直接返回
    if (!currentRow) {
      return;
    }
    const hide = message.loading('修改中...');
    try {
      // 调用后台接口执行修改操作
      await updateInterfaceInfoUsingPost({
        id: currentRow.id,
        ...fields,
      });
      hide();
      // 调用成功提示信息
      message.success('修改成功');
      return true;
    } catch (error: any) {
      hide();
      // 否则提示操作失败+报错信息
      message.error('操作失败，' + error.message);
      return false;
    }
  };

  /**
   * @zh-CN 删除节点
   * @param selectedRows
   */
  const handleRemove = async (record: API.InterfaceInfo) => {
    // 设置加载中的提示为'正在删除'
    const hide = message.loading('正在删除');
    if (!record) return true;
    try {
      // 把removeRule改成deleteInterfaceInfoUsingPOST
      await deleteInterfaceInfoUsingPost({
        // 拿到id就能删除数据
        id: record.id
      });
      hide();
      // 如果调用成功会提示'删除成功'
      message.success('删除成功');
      // 删除成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // 否则提示'删除失败' + 报错信息
      message.error('删除失败，' + error.message);
      return false;
    }
  };

  /**
   * @zh-CN 上线接口节点
   * @param selectedRows
   */
  const handleOnline = async (record: API.InterfaceInfo) => {
    // 设置加载中的提示为'正在处理'
    const hide = message.loading('正在处理');
    if (!record) return true;
    try {
      // 调用接口
      await onlineInterfaceInfoUsingPost({
        id: record.id
      });
      hide();
      // 如果调用成功会提示'处理成功'
      message.success('处理成功');
      // 处理成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // 否则提示'处理成功' + 报错信息
      message.error('处理成功，' + error.message);
      return false;
    }
  };

  /**
   * @zh-CN 下线接口节点
   * @param selectedRows
   */
  const handleOffline = async (record: API.InterfaceInfo) => {
    // 设置加载中的提示为'正在处理'
    const hide = message.loading('正在处理');
    if (!record) return true;
    try {
      // 调用接口
      await offlineInterfaceInfoUsingPost({
        id: record.id
      });
      hide();
      // 如果调用成功会提示'处理成功'
      message.success('处理成功');
      // 处理成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // 否则提示'处理成功' + 报错信息
      message.error('处理成功，' + error.message);
      return false;
    }
  };

  // 修改接口管理信息（原默认生成的是规则信息管理相关）
  const columns: ProColumns<API.InterfaceInfo>[] = [
    {
      title: '接口id',
      dataIndex: 'id',
      valueType: 'index',
      /*
      tip: 'The rule name is the unique key',
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
      */
    },
    {
      title: '接口名称',
      dataIndex: 'name',
      valueType: 'text',
      formItemProps: {
        rules: [{
          required: true, // 设置必填项
          message: "请输入", // 设置提示信息
        }]
      }
    },
    {
      title: '描述',
      //description对应后端的字段名
      dataIndex: 'description',
      // 展示的文本为富文本编辑器
      valueType: 'textarea',

    },
    {
      title: '请求方法',
      dataIndex: 'method',
      // 展示的文本为富文本编辑器
      valueType: 'text',
    },
    {
      title: 'url',
      dataIndex: 'url',
      valueType: 'text',
    },
    {
      title: '请求参数',
      dataIndex: 'requestParams',
      valueType: 'jsonCode',
    },
    {
      title: '请求头',
      dataIndex: 'requestHeader',
      valueType: 'jsonCode',
      hidden: true // 隐藏指定列
    },
    {
      title: '响应头',
      dataIndex: 'responseHeader',
      valueType: 'jsonCode',
      hidden: true // 隐藏指定列
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
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
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInForm: true,
      hidden: true
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInForm: true,
    },
    // 接口信息管理操作配置定义
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,

        record.status === 0 ?
          <a key="online"
             onClick={() => {
               handleOnline(record);
             }}>
            上线
          </a> : null,

        record.status === 1 ?
          <a key="offline"
             onClick={() => {
               handleOffline(record);
             }}>
            下线
          </a> : null,

        <a key="config"
           onClick={() => {
             handleRemove(record);
           }}>
          删除
        </a>,

      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined/> 新建
          </Button>,
        ]}
        // 原脚手架默认调用API接口
        // request={rule}

        // request={listInterfaceInfoByPageUsingPost} // 直接调用的话无法渲染，因为响应数据交互不匹配

        // 根据request规则，重新编写请求和响应处理
        request={async (params, sort: Record<string, SortOrder>, filter: Record<string, React.ReactText[] | null>) => {
          const res = await listInterfaceInfoByPageUsingPost({
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
      {selectedRowsState?.length > 0 && (
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
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
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
                   visible={updateModalOpen}
                   values={currentRow || {}}
      />

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
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
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
};
export default TableList;
