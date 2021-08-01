<template>
    <section class="max-w-[1000px] transition-all">
        <h2 class="numberedHeading">Things I've Built</h2>
        <ul>
            <Project
                v-for="post in posts"
                :key="post.id"
                :order="post.order"
                :title="post.title"
                :githubUrl="post.githubUrl"
                :demoLink="post.demoLink"
                :previewTexts="post.previewTexts"
                :thumbnailUrl="post.thumbnailUrl"
                :tags="post.tags"
            />
        </ul>
    </section>
</template>

<script>
import { socialMedia, projectNames } from "~/config";
export default {
    data() {
        return {
            socialMedia: null,
            projectNames: null,
        };
    },
    props: {
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        posts: {
            type: Array,
        },
    },
    created() {
        this.socialMedia = socialMedia;
        this.projectNames = projectNames;
    },
    // async fetch() {
    //     const reponse = await fetch(
    //         "https://api.github.com/users/weicheng2138/repos"
    //     );
    //     const result = await reponse.json();
    //     console.log(result);
    //     console.log(this.projectNames);
    // },
};
</script>

<style lang="scss" scoped>
a {
    @apply hover:text-bcColor;
}
</style>