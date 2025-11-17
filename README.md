Repository for my personal website, [rachelfrantsen.com](https://www.rachelfrantsen.com).

## Complete Stack
- [Vue.js](https://vuejs.org/)
  - Navigation bar, animated in pure CSS: src/components/[Navigation.vue](https://github.com/frantsen/portfolio/blob/master/src/components/Navigation.vue)
  - Cover 3D Animation: src/components/[WaveScene.vue](https://github.com/frantsen/portfolio/blob/master/src/components/WaveScene.vue)
  - "Git-diff-style" skills: src/components/screens/[Skills.vue](https://github.com/frantsen/portfolio/blob/master/src/components/screens/Skills.vue)
  - More pages: src/components/[screens](https://github.com/frantsen/portfolio/tree/master/src/components/screens)
  - Mounting chain: src/[main.js](https://github.com/frantsen/portfolio/blob/master/src/main.js) > src/[App.vue](https://github.com/frantsen/portfolio/blob/master/src/App.vue) > src/components/[Home.vue](https://github.com/frantsen/portfolio/blob/master/src/components/Home.vue)
- [Vuex](https://vuex.vuejs.org/) (state management)
  - src/[store/index.js](https://github.com/frantsen/portfolio/blob/master/src/store/index.js)
- [Vue Router](https://router.vuejs.org/)
  - src/[router/index.js](https://github.com/frantsen/portfolio/blob/master/src/router/index.js)
- [Google Analytics](https://developers.google.com/analytics)
- 3D WebGL & WebGPU graphics on [ThreeJS](https://threejs.org/)
- Bundling with [Webpack](http://vuejs-templates.github.io/webpack/) & [Vue-Loader](http://vuejs.github.io/vue-loader)
- [Node.js](https://nodejs.org/) server
- Bash scripting (build steps): [postBuild.sh](https://github.com/frantsen/portfolio/blob/master/postBuild.sh)
- [DNS](https://www.cloudflare.com/dns/), [CDN](http://cloudflare.com/cdn/) & full [TLS (SSL)](https://www.cloudflare.com/ssl) encryption by Cloudflare
- Domain registration by Google, now [Squarespace](https://domains.squarespace.com/google-domains)
- Hosted on [Github Pages](https://docs.github.com/en/pages)
- [Git](https://git-scm.com/) version control by GitHub (right here!)

### In Progress
- Replace Vue Router & VueX with native Vue, remove plugins.
- Migrate from Webpack & Vue Loader to Vite.
- Migrate from Vue 2 to Vue 3.
- Integrate TypeScript.
___
### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification and view the bundle analyzer report
npm run build --report

# run the built app locally
npm run start
```
