const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Univers-light-normal.ttf","fonts/UniversLTStd-Bold.otf","fonts/UniversLTStd.otf","fonts.css","logo.svg","map.png","SVG/gude-2023-10-17.log","SVG/SVG/Asset 2.svg","SVG/SVG/gude-2023-10-23.log"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".otf":"font/otf",".css":"text/css",".svg":"image/svg+xml",".log":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CL8wlXxn.js","app":"_app/immutable/entry/app.5FwplpqH.js","imports":["_app/immutable/entry/start.CL8wlXxn.js","_app/immutable/chunks/entry.B3lp64PH.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.5FwplpqH.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Cw_2IG9P.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B2BRG-mN.js')),
			__memo(() => import('./chunks/1-45_P5hgM.js')),
			__memo(() => import('./chunks/2-C6eccXEi.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
