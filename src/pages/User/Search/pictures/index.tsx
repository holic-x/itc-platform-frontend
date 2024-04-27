import { searchAllByCondAdaptorUsingPost } from '@/services/itc-platform/searchOptimizeController';
import { Card, List } from 'antd';
import React from 'react';

const params = {
  searchText: '小黑子',
  searchType: 'pictures',
};
console.log(params);

// 请求接口获取图片信息
const fetchResData = async () => {
  try {
    const res = await searchAllByCondAdaptorUsingPost({
      ...params,
    });
    return res.data;
  } catch (error) {
    // 提示异常信息
    alert('图片信息请求异常');
  }
  return undefined;
};
// 调用方法获取响应处理后的数据
const resData = await fetchResData();

const Index: React.FC = () => {
  return (
    // 页面信息定义（search）
    <div className="search">
      <div>
        <List
          grid={{ gutter: 16, column: 6 }}
          dataSource={resData?.dataList}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                cover={
                  <img
                    alt={item.title}
                    src={item.url}
                    style={{ height: '375px', objectFit: 'scaleDown' }}
                  />
                }
              >
                <List.Item.Meta title={<a href={item.url}>{item.title}</a>} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default Index;
