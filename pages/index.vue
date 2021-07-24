<template>
    <div>
        <SectionsHero id="hero" v-animate-on-scroll />

        <SectionsAbout id="about" v-animate-on-scroll />

        <SectionsJobs id="jobs" v-animate-on-scroll />

        <SectionsProjects id="works" v-animate-on-scroll :posts="posts" />

        <SectionsContact id="contact" v-animate-on-scroll />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
        };
    },
    scrollToTop: true,
    async asyncData(context) {
        let tempPosts = await context.app.$storyapi.get("cdn/stories", {
            version: "draft",
            starts_with: "jobs/",
        });
        // console.log(tempPosts.data.stories);

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
                    id: el.id,
                    order: parseInt(el.content.order) % 2,
                    title: el.content.title,
                    githubUrl: el.content.githubUrl,
                    demoLink: el.content.demoLink,
                    previewTexts: el.content.previewText,
                    thumbnailUrl: el.content.thumbnailUrl.filename,
                    tags: el.content.tags,
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
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
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
