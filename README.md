# porfolio-nuxt

<p align="center">
    <a href="https://weichenghung-demo.netlify.app" target="_blank">
        Demo Site
    </a>
</p>

<p align="center">
    <a href="https://app.netlify.com/sites/elated-payne-b4209a/deploys" target="_blank">
        <img src="https://api.netlify.com/api/v1/badges/8211a0c0-ee7b-4258-ab3d-2bb1757dbc32/deploy-status" alt="Netlify Status" />
    </a>
</p>

![demo](https://a.storyblok.com/f/118480/3074x2000/74c5a572dc/portfolio_screenshot_1.png)

This is a porfolio practice which consider [brittanychiang.com](https://brittanychiang.com) as my reference. My purpose is to reverse engineer her site and use the same appearance. One of goal is transforming [Gatsby](https://www.gatsbyjs.org/docs/) to [Nuxt](https://nuxtjs.org/) by using different front-end framework to do the job. This is simply for practice.

## Survey and Preparation

Before I start the job, there are something need to be done.

1. Understand the code structure of Brittany's work. Something like code enter point, pages structure, components css styles, etc. All these know-how may be presented from [Gatsby doc](https://www.gatsbyjs.org/docs/) and its dependencies.

2. Learn [Nuxt](https://nuxtjs.org/) and [Tailwind](https://tailwindcss.com/). Create app for nuxt-portfolio and install extension for tailwind in vscode.

    - when you are using Tailwind css, it better start from mobile to larger screen. The repondsive functionality is using **min-width (height)** instead of min-width (height).

3. Formatter needs to be settled down. By right click the format document with...(Vetur or Prettier).

4. Setup for tailwind and nuxt. Checkout [nuxt/tailwind](https://tailwindcss.nuxtjs.org/). Install VScode extension of Tailwind CSS IntelliSense. It will be activate after the following process. If you wanna use sass, install it. Setup tailwind.css in ./assets/css/tailwind.css is necessary.

    ```bash
    # install nuxt app and default tailwind css in the cli
    $ yarn create nuxt-app <project-name>
    $ yarn add --dev @nuxtjs/tailwindcss postcss@latest

    # Create your tailwind.config.js running:
    $ npx tailwindcss init
    ```

    Add following code in tailwind.css. We may need to import something (font-family etc.) and the entry point is this file.

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    Configure tailwindcss property in nuxt.config.js. (Unnecessary)

    ```
    export default {
        tailwindcss: {
            cssPath: '~/assets/css/tailwind.css',
            configPath: 'tailwind.config.js',
            exposeConfig: false,
            config: {}
        }
    }
    ```

    - Beginning loader svg animation is in ./components/loader.js
    - Variants section in tailwind.config.js gives the ability for some css attributes. We have **hover** **responsive** **focus**, etc. Some of them are not default to in the attributes. You have to automatically edited.

5. Tips of Nuxt

    - Enter point of the project: layouts/default.vue => pages/index.vue. Then you can break down from those components and pages.
    - asyncData() can not be used in components, components take only pure vue stuff.
    - Normal spa mode will load empty dom, but not universal mode (SSR). SSR web will load dom at the beginning. SSR will evalute the vue component in the server (SEO purpose for existing DOM). After the first load (refresh), it will run on client side (Turn to be SPA), including nuxt-link and router.
    - Components in folder where you put your section in will auto import with the proper name in template such as components/sections/comp.vue => <SectionsComp />

6. Tips of Vue

    - Do not trying to replace the vue component property from normal function to arrow function. Because vue has already actively point **this** to the vue component. If you replace the function with arrow function, **this** will point to the prior parent which is window.
    - Transition wrapper component can not include multiple elements.

7. 🐛 Bugs Note

    - ~~About selfie div height with weird height which make the range between section 3 too long~~ => fix with extra div for imgWrapper.
    - ~~Mix-blend-mode conflicts with backdrop blur. You can't use both of then in the same view area. Although I try to manually turn it off by the event listening.~~ => Can be fixed with background-image and background-blend-mode.
    - ~~Project thumbnail get covered by other detials.~~ => Deal with the z-index

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
