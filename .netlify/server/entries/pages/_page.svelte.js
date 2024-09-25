import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <form name="contact" method="POST" data-netlify="true"><input type="hidden" name="form-name" value="contact"> <p data-svelte-h="svelte-1uk8mw9"><label>Your Name: <input type="text" name="name"></label></p> <p data-svelte-h="svelte-3c2cjw"><label>Your Email: <input type="email" name="email"></label></p> <p><label>Your Role: <select name="role[]" multiple><option value="leader" data-svelte-h="svelte-26mlre">Leader</option><option value="follower" data-svelte-h="svelte-1ty4gbi">Follower</option></select></label></p> <p data-svelte-h="svelte-18x3qco"><label>Message: <textarea name="message"></textarea></label></p> <p data-svelte-h="svelte-197m12"><button type="submit">Send</button></p></form>`;
});
export {
  Page as default
};
