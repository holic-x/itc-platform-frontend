
import { useModel } from '@umijs/max';
import React, { useEffect,useState } from 'react';
import {getUserVoMoreByCurrentLoginUserUsingGet} from "@/services/itc-platform/accountController";


const Index: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { setInitialState } = useModel('@@initialState');

  useEffect(()=>{
    getUserVoMoreByCurrentLoginUserUsingGet({}).then(res=>{
      console.error('res',res)
    })
  });

  return (

    // 页面信息定义(自定义样式)
    <div className = "my-index">
      hello my index
    </div>

  );
};
export default Index;
