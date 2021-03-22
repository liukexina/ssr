import React, { useEffect } from 'react';
import Header from './header';
import { connect } from 'react-redux';

const Home = ({ getList, list }) => {

  useEffect(() => {
    if(list.length === 0) {
      getUserList.then((list) => {
        getList(list)
      })
    }
  }, [])

  return <div>
    <Header />
    This is a React Component
    <button onClick={()=>{alert('click')}}>click</button>
    {JSON.stringify(list)}
  </div>
}

Home.loadData = (store) => { 
  getUserList.then((list) => {
    store.dispatch( {type:'CHANGE_USER_LIST', list } )
  })
}

const getUserList = new Promise((resolved, reject) => {
  setTimeout( () => {
    resolved([{name: 'zaoren'}, {name: 'ssr'}]);
  }, 300)
})

const mapStateToProps = state => ({
  list:state.list
}) 

const mapDispatchToProps = dispatch => ({
  getList: (list) => {
    dispatch({type:'CHANGE_USER_LIST', list})
  }
})

export default connect(mapStateToProps , mapDispatchToProps)(Home)

// export default Home;