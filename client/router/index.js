import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/Login'

export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/login" exact component={Login} />
  </div>
)
