				import worker, * as OTHER_EXPORTS from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\.wrangler\\tmp\\pages-gq7c9F\\functionsWorker-0.9358821529567074.mjs";
				import * as __MIDDLEWARE_0__ from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "C:\\wamp64\\www\\github\\vue\\prod\\good-things-astro-cloudflare\\.wrangler\\tmp\\pages-gq7c9F\\functionsWorker-0.9358821529567074.mjs";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;