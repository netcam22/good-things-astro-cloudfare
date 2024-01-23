import { onRequestGet as __get_involved_js_onRequestGet } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\get-involved.js"
import { onRequestGet as __insights_js_onRequestGet } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\insights.js"
import { onRequestGet as __our_network_js_onRequestGet } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\our-network.js"
import { onRequestGet as __the_digital_divide_js_onRequestGet } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\the-digital-divide.js"
import { onRequestGet as __what_to_do_js_onRequestGet } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\what-to-do.js"
import { onRequestGet as __index_js_onRequestGet } from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\functions\\index.js"

export const routes = [
    {
      routePath: "/get-involved",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__get_involved_js_onRequestGet],
    },
  {
      routePath: "/insights",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__insights_js_onRequestGet],
    },
  {
      routePath: "/our-network",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__our_network_js_onRequestGet],
    },
  {
      routePath: "/the-digital-divide",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__the_digital_divide_js_onRequestGet],
    },
  {
      routePath: "/what-to-do",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__what_to_do_js_onRequestGet],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__index_js_onRequestGet],
    },
  ]