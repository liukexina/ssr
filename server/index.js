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
const { StaticRouter } = require('react-router-dom');
const Router = require('../client/router').default;

const koaRouter = new KoaRouter();
const app = new Koa();

console.log(path.resolve(__dirname, '../public'))

app.use(koaStatic(path.resolve(__dirname, '../public')));


koaRouter.get("/(.*)", async (ctx) => {
  const context = {};
  console.log('ctx.url', ctx.url);
  ctx.body = template(
    renderToString(
      //传入当前path
      //context为必填参数,用于服务端渲染参数传递
      <StaticRouter location={ctx.url} context={context}>
        {Router}
      </StaticRouter>
      // <Home />
    )
  );
});

app.use(koaRouter.routes());

app.listen(8888);
console.log('app is starting at port 8888');

