import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';

// 自定义下载按钮组件,传入参数完成下载操作（downloadUrl：下载链接）
const DownloadButton = ({ downloadUrl }) => {
  const copyToClipboard = () => {
    alert(`下载内容：`+ downloadUrl);
    // 模拟下载操作
    navigator.clipboard.writeText('模拟下载').then(
      () => message.success('下载成功'),
      () => message.error('下载失败')
    );
  };

  return (
    <Button icon={<DownloadOutlined />} onClick={copyToClipboard} type="dashed">
      下载
    </Button>
  );
};

export default DownloadButton;
