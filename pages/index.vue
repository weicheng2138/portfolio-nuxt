<template>
    <div>
        <SectionsHero v-animate-on-scroll />

        <SectionsAbout />

        <SectionsJobs />
        <!-- <GithubElement
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :excerpt="post.previewText"
            :thumbnailImg="post.thumbnailUrl"
            :id="post.id"
        />

        <Projects :title="aboutPage.title" :content="aboutPage.content" /> -->

        <!-- <div class="links">
                <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button--green"
                >
                    Documentation
                </a>
                <NuxtLink to="/404"> 404 Page </NuxtLink>
            </div>
            <Logo /> -->
        <!-- <Footer /> -->
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    async asyncData(context) {
        let tempPosts = await context.app.$storyapi.get("cdn/stories", {
            version: "draft",
            starts_with: "blog/",
        });

        let tempAboutPage = await context.app.$storyapi.get(
            "cdn/stories/about/about",
            {
                version: "draft",
            }
        );
        return {
            aboutPage: {
                title: tempAboutPage.data.story.content.title,
                content: tempAboutPage.data.story.content.content,
            },
            posts: tempPosts.data.stories.map((el) => {
                return {
                    id: el.slug,
                    title: el.content.title,
                    previewText: el.content.previewText,
                    thumbnailUrl: el.content.thumbnailUrl.filename,
                };
            }),
        };
        // return context.app.$storyapi
        //     .get("cdn/stories", {
        //         version: "draft",
        //         starts_with: "blog/",
        //     })
        //     .then((res) => {
        //         // console.log(res.data.stories[0].content.thumbnailUrl);
        //         return {
        //             posts: res.data.stories.map((el) => {
        //                 return {
        //                     id: el.slug,
        //                     title: el.content.title,
        //                     previewText: el.content.previewText,
        //                     thumbnailUrl: el.content.thumbnailUrl.filename,
        //                 };
        //             }),
        //         };
        //     });
    },
    methods: {
        refresh() {
            location.reload(true);
        },
    },
};
</script>

<style>
</style>
