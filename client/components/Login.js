import React, { useEffect } from "react";
import Header from './header';
import { connect } from 'react-redux';

const Login = ({ getInfo, userInfo}) => {

  useEffect(() => {
    if(!userInfo.name) {
      getUserInfo.then((res) => {
        getInfo(res)
      })
    }
  },[])

  return (
    <>
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
    {JSON.stringify(userInfo)}
    </>
  );
};

Login.loadData = (store) => { 
  getUserInfo.then((userInfo) => {
    store.dispatch( {type:'CHANGE_USER_INFO', userInfo } )
  })
}

const getUserInfo = new Promise((resolved, reject) => {
  setTimeout( () => {
    resolved({name: 'lkx', age: 22});
  }, 300)
})

const mapStateToProps = state => ({
  userInfo: state.userInfo
}) 

const mapDispatchToProps = dispatch => ({
  getInfo: (userInfo) => {
    dispatch({type:'CHANGE_USER_INFO', userInfo})
  }
})

export default connect(mapStateToProps , mapDispatchToProps)(Login)

// export default Login;
