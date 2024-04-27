import { useModel } from '@umijs/max';
import React, { useState } from 'react';

const Users: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { setInitialState } = useModel('@@initialState');


  return (

    // 页面信息定义（search）
    <div className = "search">
      hello my Users
    </div>

  );
};
export default Users;
