import {Card, List} from 'antd';
import React from 'react';
import {searchAllByCondAdaptorUsingPost} from "@/services/itc-platform/searchOptimizeController";


const params = {
  searchText: '小黑子',
  searchType: 'picture'
}

// 请求接口获取图片信息
const resData = await searchAllByCondAdaptorUsingPost({
  ...params
})

const Index: React.FC = () => {

    return (
      // 页面信息定义（search）
      <div className="search">
        <div>
          <List
            grid={{gutter: 16, column: 6}}
            dataSource={resData?.data?.dataList}
            renderItem={item => (
              <List.Item>
                <Card
                  hoverable
                  cover={<img alt={item.title} src={item.url} style={{height: '375px', objectFit: 'scaleDown'}}/>}
                >
                  <List.Item.Meta
                    title={<a href={item.url}>{item.title}</a>}
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
;

export default Index;
