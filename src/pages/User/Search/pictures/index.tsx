import { useRequest } from '@umijs/max';
import { Card, Col, Form, List, Row, Select, Typography } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { FC } from 'react';
import { categoryOptions } from '../../../Mod/mock';
import AvatarList from './components/AvatarList';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import type { ListItemDataType } from './data.d';
import { queryFakeList } from './service';
import useStyles from './style.style';


const Index: React.FC = () => {

  const getKey = (id: string, index: number) => `${id}-${index}`;



  const resData = {
    "code": 0,
    "data": {
      "userList": null,
      "postList": null,
      "pictureList": null,
      "dataList": [
        {
          "title": "小黑子(动漫手机动态壁纸) - 动漫手机壁纸下载 - 元气壁纸",
          "url": "https://img-baofun.zhhainiao.com/pcwallpaper_ugc_mobile/preview/d18970e11e41e5ebfce827c06d117902_preview_mid.jpg"
        },
        {
          "title": "小黑子头像 - 高清图片，堆糖，美图壁纸兴趣社区",
          "url": "https://c-ssl.duitang.com/uploads/blog/202302/06/20230206113723_52f25.jpg"
        },
        {
          "title": "小黑子 - 堆糖，美图壁纸兴趣社区",
          "url": "https://c-ssl.duitang.com/uploads/blog/202207/10/20220710223208_743ef.jpg"
        },
        {
          "title": "小黑子 - 高清图片，堆糖，美图壁纸兴趣社区",
          "url": "https://c-ssl.dtstatic.com/uploads/blog/202308/02/0GSv6ZAzI0Qolj9.thumb.1000_0.jpg"
        },
        {
          "title": "《黑子的篮球》黑子哲也的50个小秘密，奇迹的世代，幻之第六人",
          "url": "http://n.sinaimg.cn/sinacn20190728ac/600/w1920h1080/20190728/c053-iakuryx3061331.jpg"
        },
        {
          "title": "《黑子的篮球》黑子哲也的50个小秘密，奇迹的世代，幻之第六人",
          "url": "http://n.sinaimg.cn/sinacn20190728ac/600/w1920h1080/20190728/c053-iakuryx3061331.jpg"
        },
        {
          "title": "《黑子的篮球》黑子哲也的50个小秘密，奇迹的世代，幻之第六人",
          "url": "http://n.sinaimg.cn/sinacn20190728ac/600/w1920h1080/20190728/c053-iakuryx3061331.jpg"
        },
        {
          "title": "《黑子的篮球》黑子哲也的50个小秘密，奇迹的世代，幻之第六人",
          "url": "http://n.sinaimg.cn/sinacn20190728ac/600/w1920h1080/20190728/c053-iakuryx3061331.jpg"
        },
        {
          "title": "《黑子的篮球》黑子哲也的50个小秘密，奇迹的世代，幻之第六人",
          "url": "http://n.sinaimg.cn/sinacn20190728ac/600/w1920h1080/20190728/c053-iakuryx3061331.jpg"
        }
      ]
    },
    "message": "ok"
  };

  return (
    // 页面信息定义（search）
    <div className="search">
      <div>
        <List
          grid={{ gutter: 16, column: 6 }}
          dataSource={resData?.data?.dataList}
          renderItem={item => (
            <List.Item>
              <Card
                hoverable
                cover={<img alt={item.title} src={item.url} style={{ height: '375px', objectFit: 'scaleDown' }} />}
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
};
export default Index;
