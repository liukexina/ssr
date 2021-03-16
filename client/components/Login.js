import React from "react";
import Header from './header';

const Login = () => {
  return (
    <div>
      <Header/>
      <div>
        <span>请输入账号</span>
        <input placeholder="请输入密码" />
      </div>
      <div>
        <span>请输入密码</span>
        <input placeholder="请输入密码" />
      </div>
    </div>
  );
};

export default Login;
