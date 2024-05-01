import type { TabsProps} from 'antd';
import {Card, notification, Tabs} from 'antd';
import React, {useEffect, useState} from 'react';
import Search from "antd/es/input/Search";
// import {StringUtils} from "@/utils";
import {FrownOutlined} from "@ant-design/icons";
// import { useLocation} from 'umi';

import { history, Outlet, useLocation, useMatch } from '@umijs/max';


import {searchAllByCondAdaptorUsingPost} from '@/services/itc-platform/searchOptimizeController';


import ArticlesList from "@/pages/User/Search/articles";



const SearchPage: React.FC = () => {
  // const history = useHistory();

  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const [type, setType] = useState(()=>{
    return urlSearchParams.get('type') || 'csdn';
  });
  const [searchText, setKeyword] = useState(()=>{
    return urlSearchParams.get('searchText') || '';
  });
  const [pageNum, setPageNum] = useState(()=>{
    return Number(urlSearchParams.get('pageNum')) || 1;
  });
  const [tags, setTags] = useState<string[]>(()=>{
    return urlSearchParams.getAll('tags') || [];
  });

  const [articlesList, setArticlesList] = useState<Search.Post[]>([]);
  const [userList, setUserList] = useState<Search.UserVO[]>([]);


  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(1);
  const [api, contextHolder] = notification.useNotification();

  const setData = (type: string, data: API.PostVO[] | API.UserVO[] )=>{
    switch (type) {
      case 'articles': setArticlesList(data as API.PostVO[]);break;
      // case 'user': setUserList(data as API.UserVO[]);break;
    }
  }

  //监听路径参数变化
  useEffect(()=>{
    const params: Search.SearchRequest = {
      type: urlSearchParams.get('type') || 'csdn',
      searchText: urlSearchParams.get('searchText') || '',
      current: Number(urlSearchParams.get('pageNum')) || 1,
      tags: urlSearchParams.getAll('tags') || []
    };
    setType(params.type);
    setKeyword(params.searchText);
    setPageNum(params.pageNum);
    setTags(params.tags || []);
    // if(StringUtils.isNotEmpty(params.searchText) ||
      if(
      (params.type === 'articles' || params.type === 'user') && params.tags && params.tags.length > 0){
      setLoading(true);
      // 请求参数
      searchAllByCondAdaptorUsingPost(params).then(res => {
        if(res.code === 0 && res.data){
          const {records, total} = res.data.pageData;
          setData(params.type, records);
          setTotal(total);
          setLoading(false);
          if(records.length === 0 && params.type === 'cnblog'){
            api.open({
              message: '未查询到信息',
              description:
                '博客园做了反爬虫处理，未查询到结果大概率是后端查询的cookie过期了',
              icon: <FrownOutlined style={{ color: '#108ee9' }} />,
            });
          }
        }
      })
    }
  }, [location.search])

  function onSearch(value: string) {
    setKeyword(value);
    const params = new URLSearchParams({
      type,
      searchText: value,
      // pageSize: pageNum.toString(),
    });
    // tags.forEach(tag => params.append('tags', tag));
    //将搜索参数拼接到query上
    history.push(`search?${params.toString()}`);
  }

  const appendPageNumQuery = (pageNum: number) => {
    setPageNum(pageNum);
    const params = new URLSearchParams({
      type,
      searchText,
      pageNum: pageNum.toString(),
    });
    tags.forEach(tag => params.append('tags', tag));
    //添加pageNum参数
    history.push(`search?${params.toString()}`);
  }

  const appendTagsQuery = (selectedTags: string[]) => {
    setTags(selectedTags);
    const params = new URLSearchParams({
      type,
      searchText,
      pageNum: pageNum.toString(),
    });
    selectedTags.forEach(tag => params.append('tags', tag));
    //将搜索标签拼接到path上
    history.push(`search?${params.toString()}`);
  }

  const onTypeChange = (key: string) => {
    setType(key);
    setTags([]);
    const params = new URLSearchParams({
      type: key,
      searchText,
    });
    //将搜索类别拼接到path上
    history.push(`search?${params.toString()}`);
  };

  const items: TabsProps['items'] = [
    // {
    //   key: 'blog',
    //   label: `博客`,
    //   children: <BlogList
    //     dataList={blogList} pageNum={pageNum} total={total} loading={loading} selectedTags={tags}
    //     updateArticle={(id, isLiked, likeCount, isStared, starCount)=>{
    //       setBlogList(blogList.map(tmp => tmp.id === id ?
    //         {...tmp, isLiked, likeCount, isStared, starCount} : tmp))
    //     }}
    //     changePage={(pageNum)=>appendPageNumQuery(pageNum)}
    //     changeTags={(selectedTags)=>appendTagsQuery(selectedTags)}
    //   />,
    // },
    // {
    //   key: 'user',
    //   label: `用户`,
    //   children: <UserList
    //     dataList={userList} pageNum={pageNum} total={total} loading={loading}  selectedTags={tags}
    //     afterDoFollow={user =>
    //       setUserList(userList.map(result =>
    //         result.uid === user.uid ? {
    //           ...result,
    //           fans: result.isFollow ? result.fans - 1 : result.fans + 1,
    //           isFollow: !result.isFollow,
    //         } : result))
    //     }
    //     changePage={(pageNum)=>appendPageNumQuery(pageNum)}
    //     changeTags={(selectedTags)=>appendTagsQuery(selectedTags)}
    //   />,
    // },
    {
      key: 'articles',
      label: 'articles文章',
      children: <ArticlesList
        loading={loading} dataList={articlesList}
        changePage={(pageNum)=>appendPageNumQuery(pageNum)}
      /> ,
    },
    {
      key: 'pictures',
      label: '图片信息',
      children: <ArticlesList
        loading={loading} dataList={articlesList}
        changePage={(pageNum)=>appendPageNumQuery(pageNum)}
      /> ,
    },
    //
    // {
    //   key: 'cnblog',
    //   label: '博客园',
    //   children: <CnBlogList
    //     loading={loading} dataList={cnBlogList} total={total}
    //     changePage={(pageNum)=>appendPageNumQuery(pageNum)}
    //   />,
    // }
    //
  ];

  return (
    <>
      {contextHolder}
      <Card style={{margin: '19px auto 32px auto', width: '50%',borderRadius:8}}>
        <Search
          size='large'
          defaultValue={searchText}
          onChange={(e)=>{
            setKeyword(e.target.value)
          }}
          placeholder="试试搜索"
          onSearch={onSearch}
        />
      </Card>
      <Card style={{width: 980, margin: '0 auto',borderRadius:8}}>
        <div style={{margin: '0 auto', width: '96%'}}>
          <Tabs
            defaultActiveKey={type}
            onChange={onTypeChange}
            items={items}
          />
        </div>
      </Card>
    </>
  );
};

export default SearchPage;
