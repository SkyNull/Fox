import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

import About from "@/components/about";
import Home from "@/components/home";
// import Lesson from '@/components/lesson'
const Lesson = () => import("@/components/lesson");
const Net = () => import("@/components/lesson/net");
const Rry = () => import("@/components/lesson/rry");
const Money = () => import("@/components/lesson/money");
const Transfer = () => import("@/components/lesson/money/transfer");
const Hbao = () => import("@/components/lesson/money/hbao");
const Hying = () => import("@/components/lesson/money/hying");
const Hyou = () => import("@/components/lesson/money/hyou");
const Login = () => import("@/components/login");

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
    children: [
      {
        path: "/home",
        component: Home,
        name: "home",
        meta: {
          til: "首页"
        }
      },
      {
        path: "/lesson",
        component: Lesson,
        redirect: "/lesson/net",
        children: [
          {
            path: "/lesson/net",
            component: Net
          },
          {
            path: "/lesson/money",
            component: Money,
            redirect: "/lesson/money/transfer",
            children: [
              {
                path: "/lesson/money/transfer",
                component: Transfer
              },
              {
                path: "/lesson/money/hbao",
                component: Hbao
              },
              {
                path: "/lesson/money/hying",
                component: Hying
              },
              {
                path: "/lesson/money/hyou",
                component: Hyou
              }
            ]
          },
          {
            path: "/lesson/rry",
            component: Rry
          }
        ]
      },
      {
        path: "/about",
        component: About
      }
    ]
  },
  {
    path: "/login",
    component: Login
  }
];
export default new Router({
  routes,
  linkActiveClass: "current"
});
