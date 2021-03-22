import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Route } from 'react-router-dom'
import getStore from "./store";
import Router from './router'
const state = window.__STATE__;

const App= () => {
  return (
    <Provider store={getStore(state)}>
      <BrowserRouter>
        {/* {Router} */}
        <div>
          {Router.map(router=> (
            <Route {...router}/>
          ))}
        </div>
      </BrowserRouter>
    </Provider>
      // <BrowserRouter>
      //    {Router}
      // </BrowserRouter>
  )
}

ReactDOM.hydrate(
  <App/>,
  document.querySelector('#app')
);
