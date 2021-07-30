import vue from "vue";
import Router from "vue-router";
import layout from "@/layout/index.vue";
import sidebar from './sidebar'

vue.use(Router);

const router = new Router({
  routes: [
    ...sidebar,
    { 
      path: "*",
      component: layout,
      mate: {title: '页面未找到'},
      redirect: 'notfound',
      isShow: false,
      children: [
        {
          path: 'notfound',
          component: () => import("../views/404.vue")
        }
      ]
    },
  ],
});

export default router;
