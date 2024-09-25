

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D5OolaO4.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.xZp2ekXT.js","_app/immutable/chunks/entry.D4V5LnYr.js"];
export const stylesheets = [];
export const fonts = [];
