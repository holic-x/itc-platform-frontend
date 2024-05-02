import React from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';

// 自定义复制按钮组件,传入text文件则可完成复制操作
const CopyButton = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(
      () => message.success('复制成功'),
      () => message.error('复制失败')
    );
  };

  return (
    <Button icon={<CopyOutlined />} onClick={copyToClipboard} type="primary">
      复制
    </Button>
  );
};

export default CopyButton;
