import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.COM0l9Tm.js","app":"_app/immutable/entry/app.DCiQSUFL.js","imports":["_app/immutable/entry/start.COM0l9Tm.js","_app/immutable/chunks/entry.CTwTCSe6.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DCiQSUFL.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.xZp2ekXT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
