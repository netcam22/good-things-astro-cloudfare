import { onRequestGet as __cats_js_onRequestGet } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\cats.js"
import { onRequest as __bats_js_onRequest } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\bats.js"
import { onRequest as __helloworld_js_onRequest } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\helloworld.js"

export const routes = [
    {
      routePath: "/cats",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__cats_js_onRequestGet],
    },
  {
      routePath: "/bats",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__bats_js_onRequest],
    },
  {
      routePath: "/helloworld",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__helloworld_js_onRequest],
    },
  ]