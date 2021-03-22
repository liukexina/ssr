// import Koa from 'koa';
// import serve from 'koa-static';
// import path from 'path';
// import React from 'react';
// import template from './template';
// import { renderToString } from 'react-dom/server';
// import { StaticRouter } from "react-router-dom";
// import KoaRouter from "koa-router";
// import Router from "./src/router";


const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const template = require('./template').default;
const React = require('react');
const KoaRouter = require('koa-router');
const { renderToString } = require('react-dom/server');
const { StaticRouter, Route, matchPath } = require('react-router-dom');
const Router = require('../client/router').default;
const { Provider }  = require('react-redux');
const getStore = require('../client/store').default;

const koaRouter = new KoaRouter();
const app = new Koa();

app.use(koaStatic(path.resolve(__dirname, '../public')));


koaRouter.get("/(.*)", async (ctx) => {
  const context = {};
  console.log('ctx.url', ctx.url);

  const store = getStore();
  const matchRoutes = [];
  const promises = [];

  Router.some(route=> {
    matchPath(ctx.url, route) ? matchRoutes.push(route) : ''
  })

  matchRoutes.forEach(item=> {
    promises.push(item.loadData(store))
  })

  Promise.all(promises).then(() => {
    console.log('store.getState()', store.getState());

    ctx.body = template(
      renderToString(
        //传入当前path
        //context为必填参数,用于服务端渲染参数传递
        <Provider store={store}>
          <StaticRouter location={ctx.url} context={context}>
            {/* {Router} */}
            <div>
              {Router.map(router=> (
                <Route {...router}/>
              ))}
            </div>
          </StaticRouter>
        </Provider>
        // <Home />
      ),store.getState()
    );
  })
});

app.use(koaRouter.routes());

app.listen(8888);
console.log('app is starting at port 8888');

