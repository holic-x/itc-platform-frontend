import { useModel } from '@umijs/max';
import React, { useState } from 'react';

const Index: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { setInitialState } = useModel('@@initialState');


  return (

    // 页面信息定义（search）
    <div className = "search">
      hello my Pictures
    </div>

  );
};
export default Index;
