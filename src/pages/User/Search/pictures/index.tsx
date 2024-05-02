import {searchAllByCondAdaptorUsingPost} from '@/services/itc-platform/searchOptimizeController';
import {Card, List} from 'antd';
import React, { useEffect,useState } from 'react';







const Index: React.FC = () => {

  const searchParams = new URLSearchParams(location.search);
  const searchText = searchParams.get('searchText');
  const params = {
    searchText: searchText,
    searchType: 'pictures',
  };

// const params = {
//   searchText: '小黑子',
//   searchType: 'pictures',
// };
  console.log('params:'+searchText);


  // 请求接口获取图片信息
  /*
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
  const resData = fetchResData();
  */

  const [resData,setResData]  = useState();

  // 调用方法获取响应处理后的数据
  useEffect(()=>{
    searchAllByCondAdaptorUsingPost({
      ...params,
    }).then(res=>{
      setResData(res.data);
      console.error('res',res)
    });
  },[])


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
