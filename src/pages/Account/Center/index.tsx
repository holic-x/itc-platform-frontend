import React, {useEffect, useState} from 'react';
import {PageContainer, GridContent} from '@ant-design/pro-components';
import {
  ClusterOutlined,
  ContactsOutlined,
  HomeOutlined,
  PlusOutlined,
  CopyOutlined,
  ApiOutlined,
  PayCircleOutlined
} from '@ant-design/icons';


import {Avatar, Card, Col, Divider, Input, InputRef, Row, Tag, message,Button, Spin} from 'antd';
import {useModel} from "@@/exports";


// 引入自定义样式
import useStyles from './Center.style';
import {getUserVoMoreByCurrentLoginUserUsingGet, userSignInUsingPost} from "@/services/itc-platform/accountController";

// 引入自定义组件（复制按钮）
import CopyButton from "@/components/Common/CopyButton";
import DownloadButton from "@/components/Common/DownloadButton";

const Index: React.FC = () => {

  // 定义自定义样式
  const {styles} = useStyles();

  // 获取登录用户信息
  const {initialState} = useModel('@@initialState');
  const {currentUser} = initialState || {};

  // 用户详细信息
  const [userMoreInfo, setUserMoreInfo] = useState();


  // 定义方法获取用户信息
  const fetchUserInfo = async () => {
    getUserVoMoreByCurrentLoginUserUsingGet().then(res => {
      setUserMoreInfo(res.data);
      console.error('center响应数据', res)
    });
  }

  // 调用接口获取用户详情信息(空数组表示仅在组件挂载时调用一次)
  useEffect(() => {
    // 调用方法触发用户信息获取
    fetchUserInfo();
  }, [])


  // ---------------- start 操作方法定义 --------------
  // 重新生成AK/SK
  const handleRegenerate = () => {
    alert('模拟调用接口重新生成AK、SK');
    // 响应成功，重新请求刷新页面数据
    fetchUserInfo();
  }

  // 处理每日签到
  const handleDailySignIn = async () => {
    try {
      // alert('模拟调用接口进行每日签到领取积分');
      await userSignInUsingPost().then(res => {
        alert('🚀🚀🚀签到成功，恭喜获取💰10积分，请再接再厉');
      });
      // 响应成功，重新请求刷新页面数据
      fetchUserInfo();
    } catch (error: any) {
      message.error('签到失败(日内不能重复签到)：' + error.message);
      return false;
    }
  }

  // ---------------- end 操作方法定义 --------------


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
        <Button type="link" onClick={handleRegenerate}>💊重新生成AK/SK💊</Button>
        <Button type="link" onClick={handleDailySignIn}>🚀每日签到领积分🚀</Button>
        <p>
          <ApiOutlined
            style={{
              marginRight: 8,
            }}
          />
          AccessKey：{accessKey}
          {/*引用自定义组件（复制按钮）完成复制操作*/}
          <CopyButton text={accessKey}/>
        </p>
        <p>
          <ApiOutlined
            style={{
              marginRight: 8,
            }}
          />
          SecretKey：{secretKey}
          <CopyButton text={secretKey}/>
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


  //  渲染开发者SDK区域信息（提供SDK下载内容）
  const renderDevelopSDK = () => {
    return (
      <div className={styles.detail}>
        <p>
          <ApiOutlined
            style={{
              marginRight: 8,
            }}
          />
          API接口调用平台：SDK下载 =》
          <DownloadButton downloadUrl='xxx'/>
          <Button onClick={() => {
            window.open("https://baidu.com", "_blank")
          }} type="dashed">查看开发者文档</Button>
        </p>

        <p>
          <ApiOutlined
            style={{
              marginRight: 8,
            }}
          />
          BI智能图表分析：SDK下载 =》
          <DownloadButton downloadUrl='xxx'/>
          <Button onClick={() => {
            window.open("https://baidu.com", "_blank")
          }} type="dashed">查看开发者文档</Button>
        </p>

        <p>
          <DownloadButton downloadUrl=''/>
          <DownloadButton downloadUrl='xxx'/>
        </p>
      </div>
    );
  };

  return (
    <PageContainer>
      <GridContent>
        <Row>
          <Col>
            <Card
              bordered={false}
              style={{
                marginBottom: 24,
              }}
            >
              {currentUser && (
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


                  {/*渲染开发者SDK下载区域*/}
                  <div className={styles.avatarHolder}>
                    <div className={styles.name}>SDK下载</div>
                    <div>开发者SDK：让程序开发更灵活（API接口调用、BI报表分析....）</div>
                  </div>
                  {renderDevelopSDK()}


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
