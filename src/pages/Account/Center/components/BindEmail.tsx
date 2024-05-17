import React, { useState } from 'react';
 
function ChangeEmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 
  const handleEmailChange = async (event) => {
    event.preventDefault();
    try {
      // 这里应该调用API更换邮箱的接口
      // 假设API返回的数据是 { message: '邮箱更换成功' }
      const response = await fetch('api/change-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const { message } = await response.json();
      setMessage(message);
    } catch (error) {
      setMessage('出现错误，邮箱更换失败');
    }
  };
 
  return (
    <form onSubmit={handleEmailChange}>
      <label>
        新邮箱:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">更换邮箱</button>
      {message && <div>{message}</div>}
    </form>
  );
}
 
export default ChangeEmailForm;