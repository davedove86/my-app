import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <form name="contact" netlify data-svelte-h="svelte-texh3l"><p><label>Name <input type="text" name="name"></label></p> <p><label>Email <input type="email" name="email"></label></p> <p><button type="submit">Send</button></p></form>`;
});
export {
  Page as default
};
