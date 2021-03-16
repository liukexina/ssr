import React from 'react';
import Header from './header';

const Home = () => {
  return <div>
    <Header />
    This is a React Component
    <button onClick={()=>{alert('click')}}>click</button>
  </div>
}

export default Home;