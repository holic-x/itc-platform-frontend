import React from 'react';
import {PageContainer} from '@ant-design/pro-components';
import { Col, Card, Row } from 'antd';

const Index: React.FC = () => {
  return (
    <PageContainer>
      <Row
        gutter={24}
        style={{
          marginTop: 24,
        }}
      >
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card>
            提交表单
          </Card>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card>
            图表
          </Card>
        </Col>
      </Row>
    </PageContainer>

  );
};
export default Index;
