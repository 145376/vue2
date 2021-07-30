import layout from "@/layout/index.vue";

export default [
  {
    path: "/",
    redirect: "/home",
    component: layout,
    isShow: true,
    children: [
      {
        path: "home",
        name: "Name",
        component: () => import("../views/home.vue"),
        meta: { title: "首页", icon: "icon-shouye" },
      },
    ],
  },
  {
    path: "/about",
    component: layout,
    redirect: "/about/index",
    isShow: true,
    children: [
      {
        path: "index",
        name: "About",
        component: () => import("../views/about.vue"),
        meta: { title: "关于", icon: "icon-guanyu" },
      },
    ],
  },
  {
    path: "/nested",
    component: layout,
    meta: { title: "options", icon: "icon-caidan" },
    isShow: true,
    children: [
      {
        path: "nested1",
        name: "Nested1",
        component: () => import("../views/nested/nested1/index.vue"),
        meta: { title: "option1", icon: "icon-caidan" },
        children: [
          {
            path: "nested1-1",
            name: "Nested1-1",
            component: () => import("../views/nested/nested1/nested1-1"),
            meta: { title: "option1-1", icon: "icon-ditu" },
          },
          {
            path: "nested1-2",
            name: "Nested1-2",
            component: () => import("../views/nested/nested1/nested1-2"),
            meta: { title: "option1-2", icon: "icon-biaoge" },
          },
        ],
      },
      {
        path: "nested2",
        name: "Nested2",
        component: () => import("../views/nested/nested2.vue"),
        meta: { title: "option2", icon: "icon-shezhi" },
      },
    ],
  },
]