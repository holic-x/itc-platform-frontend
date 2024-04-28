import React ,{ useEffect,useState }from 'react';
import {PageContainer,GridContent} from '@ant-design/pro-components';
import { ClusterOutlined, ContactsOutlined, HomeOutlined, PlusOutlined ,CopyOutlined,ApiOutlined,PayCircleOutlined} from '@ant-design/icons';

import { Avatar, Card, Col, Divider, Input, InputRef, Row, Tag ,Button,Spin} from 'antd';
import {useModel} from "@@/exports";



// 引入自定义样式
import useStyles from './Center.style';
import {getUserVoMoreByCurrentLoginUserUsingGet} from "@/services/itc-platform/userController";

// 引入自定义组件（复制按钮）
import CopyButton from "@/components/Common/CopyButton";

const Index: React.FC = () => {

  // 定义自定义样式
  const { styles } = useStyles();

  // 获取登录用户信息
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  // 用户详细信息
  const [userMoreInfo,setUserMoreInfo] = useState();

  // 调用接口获取用户详情信息(空数组表示仅在组件挂载时调用一次)
  useEffect(()=>{
    getUserVoMoreByCurrentLoginUserUsingGet().then(res=>{
      setUserMoreInfo(res.data);
      console.error('center响应数据',res)
    });
  },[])

  // 自定义loading组件
  const loading = (
    <span className={styles.action}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  // 如果请求还没加载完成，则等待（否则待组件加载完成数据还没请求完，就会提示渲染报错）
  if (!userMoreInfo) {
    // return <div>Loading...</div>;
    return loading;

  }

  //  渲染用户信息（展示用户详情）
  const renderUserInfo = ({userName, userRole, address}: Partial<API.CurrentUser>) => {
    return (
      <div className={styles.detail}>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          用户昵称：{userName}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          用户角色：{userRole}
        </p>
        <p>
          <HomeOutlined
            style={{
              marginRight: 8,
            }}
          />
          所在区域：{address}
        </p>
      </div>
    );
  };

  //  渲染开发者区域信息（API接口调用信息）
  const renderDevelop = ({accessKey, secretKey, score}: Partial<API.UserVO>) => {
    return (
      <div className={styles.detail}>
        <p>
          <ApiOutlined
            style={{
              marginRight: 8,
            }}
          />
          AccessKey：{accessKey}
          {/*引用自定义组件（复制按钮）完成复制操作*/}
          <CopyButton text={accessKey} />
        </p>
        <p>
          <ApiOutlined
            style={{
              marginRight: 8,
            }}
          />
          SecretKey：{secretKey}
          <CopyButton text={secretKey} />
        </p>
        <p>
          <PayCircleOutlined
            style={{
              marginRight: 8,
            }}
          />
          用户积分：{score}
        </p>
      </div>
    );
  };

  return (
    <PageContainer>
      <GridContent>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card
              bordered={false}
              style={{
                marginBottom: 24,
              }}
            >
                { currentUser && (
                  <div>
                    <div className={styles.avatarHolder}>
                      {/*<img alt="" src={currentUser.userAvatar} />*/}
                      <img alt="" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
                      <div className={styles.name}>{currentUser.userName}</div>
                      <div>{currentUser?.userDescr}</div>
                    </div>

                    {/*渲染用户信息展示用户详情*/}
                    {renderUserInfo(currentUser)}

                    {/*分割线*/}
                    <Divider dashed/>

                    {/*渲染用户信息展示用户详情*/}
                    <div className={styles.avatarHolder}>
                      <div className={styles.name}>开发者区域</div>
                      <div>API接口调用凭证信息</div>
                    </div>
                    {renderDevelop(userMoreInfo)}

                    {/*<TagList tags={currentUser.tags || []}/>*/}
                    {/*<Divider*/}
                    {/*  style={{*/}
                    {/*    marginTop: 16,*/}
                    {/*  }}*/}
                    {/*  dashed*/}
                    {/*/>*/}

                    {/*<div className={styles.team}>*/}
                    {/*  <div className={styles.teamTitle}>团队</div>*/}
                    {/*  <Row gutter={36}>*/}
                    {/*    {currentUser.notice &&*/}
                    {/*      currentUser.notice.map((item) => (*/}
                    {/*        <Col key={item.id} lg={24} xl={12}>*/}
                    {/*          <a href={item.href}>*/}
                    {/*            <Avatar size="small" src={item.logo}/>*/}
                    {/*            {item.member}*/}
                    {/*          </a>*/}
                    {/*        </Col>*/}
                    {/*      ))}*/}
                    {/*  </Row>*/}
                    {/*</div>*/}


                  </div>
                )}
            </Card>
          </Col>

          {/*<Col lg={17} md={24}>*/}
          {/*  <Card*/}
          {/*    className={styles.tabsCard}*/}
          {/*    bordered={false}*/}
          {/*    tabList={operationTabList}*/}
          {/*    activeTabKey={tabKey}*/}
          {/*    onTabChange={(_tabKey: string) => {*/}
          {/*      setTabKey(_tabKey as tabKeyType);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    {renderChildrenByTabKey(tabKey)}*/}
          {/*  </Card>*/}
          {/*</Col>*/}

        </Row>
      </GridContent>
    </PageContainer>
  );
};
export default Index;
