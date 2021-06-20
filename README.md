# porfolio-nuxt

This is a porfolio practice which consider [brittanychiang.com](https://brittanychiang.com) as my reference. My purpose is to reverse engineer her site and use the same appearance. One of goal is transforming [Gatsby](https://www.gatsbyjs.org/docs/) to [Nuxt](https://nuxtjs.org/) by using different front-end framework to do the job. This is simply for practice.

## Survey and Preparation

Before I start the job, there are something need to be done.

1. Understand the code structure of Brittany's work. Something like code enter point, pages structure, components css styles, etc. All these know-how may be presented from [Gatsby doc](https://www.gatsbyjs.org/docs/) and its dependencies.

2. Learn [Nuxt](https://nuxtjs.org/) and [Tailwind](https://tailwindcss.com/). Create app for nuxt-portfolio and install extension for tailwind in vscode.

3. Formatter needs to be settled down. By right click the format document with...(Vetur or Prettier).

4. Setup for tailwind and nuxt. Checkout [nuxt/tailwind](https://tailwindcss.nuxtjs.org/). Install VScode extension of Tailwind CSS IntelliSense. It will be activate after the following process. If you wanna use sass, install it.

    ```bash
    # install nuxt app and default tailwind css in the cli
    $ yarn create nuxt-app <project-name>
    $ yarn add --dev @nuxtjs/tailwindcss postcss@latest

    # Create your tailwind.config.js running:
    $ npx tailwindcss init
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
