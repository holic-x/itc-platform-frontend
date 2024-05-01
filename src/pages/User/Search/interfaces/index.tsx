import {
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Dropdown, Form, List, Row, Select, Tooltip } from 'antd';
import numeral from 'numeral';
import type { FC } from 'react';
import React, { useEffect,useState } from 'react';
// import { categoryOptions } from '../../../Mod/mock';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import type { ListItemDataType } from './data.d';
import useStyles from './style.style';
import { listInterfaceInfoStatisticsByPageUsingPost } from '@/services/itc-platform/apiSquareController';
import {searchAllByCondAdaptorUsingPost} from "@/services/itc-platform/searchOptimizeController";
export function formatWan(val: number) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';
  let result: React.ReactNode = val;
  if (val > 10000) {
    result = (
      <span>
        {Math.floor(val / 10000)}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  return result;
}
const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

// 封装卡片组件
const CardInfo: React.FC<{
  callTotal: React.ReactNode;
  callSuccessNum: React.ReactNode;
}> = ({ callTotal, callSuccessNum }) => {
  const { styles } = useStyles();
  return (
    <div className={styles.cardInfo}>
      <div>
        <p>调用总次数</p>
        <p>{callTotal}</p>
      </div>
      <div>
        <p>成功总次数</p>
        <p>{callSuccessNum}</p>
      </div>
    </div>
  );
};



export const Applications: FC<Record<string, any>> = () => {
  const { styles } = useStyles();

  // 定义全局搜索参数
  const searchParams = new URLSearchParams(location.search);
  const searchText = searchParams.get('searchText');
  const searchParam = {
    searchText: searchText,
    searchType: 'articles',
  };


  // 定义全局响应参数
  const [resData,setResData]  = useState();

  // 请求接口获取接口信息
  const fetchResData = async () => {
    try {
      const res = await listInterfaceInfoStatisticsByPageUsingPost({
        "interfaceName": "",
        "interfaceStatus": "",
        "interfaceType": "",
        "userName": ""
      });

      console.log('获取接口信息列表：'+JSON.stringify(res));
      setResData(res.data);
      return res.data;
    } catch (error) {
      // 提示异常信息
      alert('信息请求异常');
    }
    return undefined;
  };

  // 调用方法获取响应处理后的数据
  useEffect(()=>{
    listInterfaceInfoStatisticsByPageUsingPost({
      "interfaceName": "",
      "interfaceStatus": "",
      "interfaceType": "",
      "userName": "",
      "searchType": searchParam.searchType,
      "searchText": searchParam.searchText
    }).then(res=>{
      setResData(res.data);
      console.error('res',res)
    });
  },[])


  // 分页处理
  // const list = resData?.records || [];
  const list =  resData ;

  return (
    <div className={styles.filterCardList}>
      <Card bordered={false}>
        <Form
          onValuesChange={(_, values) => {
            fetchResData(values);
          }}
        >
          <StandardFormRow
            title="所属类目"
            block
            style={{
              paddingBottom: 11,
            }}
          >
            <Form.Item name="category">

              {/*<TagSelect expandable>*/}
              {/*  {categoryOptions.map((category) => (*/}
              {/*    <TagSelect.Option value={category.value!} key={category.value}>*/}
              {/*      {category.label}*/}
              {/*    </TagSelect.Option>*/}
              {/*  ))}*/}
              {/*  */}
              {/*</TagSelect>*/}

            </Form.Item>
          </StandardFormRow>
          <StandardFormRow title="其它选项" grid last>
            <Row gutter={16}>
              <Col lg={8} md={10} sm={10} xs={24}>
                <Form.Item {...formItemLayout} name="author" label="作者">
                  <Select
                    placeholder="不限"
                    style={{
                      maxWidth: 200,
                      width: '100%',
                    }}
                    options={[
                      {
                        label: '王昭君',
                        value: 'lisa',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col lg={8} md={10} sm={10} xs={24}>
                <Form.Item {...formItemLayout} name="rate" label="好评度">
                  <Select
                    placeholder="不限"
                    style={{
                      maxWidth: 200,
                      width: '100%',
                    }}
                    options={[
                      {
                        label: '优秀',
                        value: 'good',
                      },
                      {
                        label: '普通',
                        value: 'normal',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <br />
      <List<API.InterfaceInfoStatisticVO>
        rowKey="id"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        // loading={loading}
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.interfaceInfoId}>
            <Card
              hoverable
              bodyStyle={{
                paddingBottom: 20,
              }}
              actions={[
                <Tooltip key="download" title="下载">
                  <DownloadOutlined />
                </Tooltip>,
                <Tooltip key="edit" title="编辑">
                  <EditOutlined />
                </Tooltip>,
                <Tooltip title="分享" key="share">
                  <ShareAltOutlined />
                </Tooltip>,
                <Dropdown
                  key="ellipsis"
                  menu={{
                    items: [
                      {
                        key: '1',
                        title: '1st menu item',
                      },
                      {
                        key: '2',
                        title: '2st menu item',
                      },
                    ],
                  }}
                >
                  <EllipsisOutlined />
                </Dropdown>,
              ]}
            >
              <Card.Meta avatar={<Avatar size="small" src={item.interfaceInfoAvatar} />} title={item.interfaceInfoName} />
              <div>
                <CardInfo
                  callTotal={formatWan(item.callTotal)}
                  callSuccessNum={numeral(item.callSuccessNum).format('0,0')}
                />
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default Applications;
