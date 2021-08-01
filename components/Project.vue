<template>
    <li
        class="relative flex mb-7 sm:mb-16 md:mb-24"
        :class="[order ? 'justify-end' : '']"
    >
        <div
            class="z-0 md:z-10 imgContainer"
            :class="[order ? 'left-0' : 'right-0']"
            :style="imgUrlStyle"
        ></div>

        <div
            class="relative mx-4 mb-2 sm:mx-8 mt-[10%] flex flex-col md:w-8/12"
            :class="[order ? 'md:items-end' : 'md:items-start']"
        >
            <h3 class="z-0 text-bcColor font-mono text-bcXxs pb-3">
                Featured Project
            </h3>
            <h3 class="z-0 text-bcWhite pb-6">{{ title }}</h3>
            <p
                class="
                    z-20
                    text-bcMd
                    pb-6
                    md:bg-bcLightNavy
                    md:p-4
                    md:mb-4
                    md:rounded-md
                    md:shadow-lg
                "
                :class="[order ? 'md:text-right' : '']"
            >
                {{ previewTexts[0].point1 }}
            </p>
            <ul class="z-20 flex flex-row font-mono text-bcXs pb-4">
                <li v-for="tag in tags" :key="tag" class="pr-4">{{ tag }}</li>
            </ul>
            <div class="z-10 md:z-0 flex flex-row -ml-3">
                <a
                    v-if="githubUrl"
                    v-bind:href="`${githubUrl}`"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                        stroke-width="2"
                    >
                        <title>GitHub</title>
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        ></path>
                    </svg>
                </a>
                <a
                    v-if="demoLink"
                    v-bind:href="`${demoLink}`"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        order: {
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        githubUrl: {
            type: String,
            require: false,
        },
        demoLink: {
            type: String,
            require: false,
        },
        previewTexts: {
            type: Array,
            require: true,
        },
        thumbnailUrl: {
            type: String,
            require: true,
        },
        tags: {
            type: Array,
            require: true,
        },
    },
    computed: {
        imgUrlStyle() {
            return `background-image: url('${this.thumbnailUrl}')`;
        },
    },
};
</script>

<style lang="scss" scoped>
.imgContainer {
    @apply absolute bg-bcColor opacity-20 bg-blend-multiply h-[30vh] w-full transition-all md:hover:cursor-pointer
    md:hover:bg-blend-normal md:opacity-100 md:w-8/12 md:top-1/4 h-full rounded-md;
    background-size: cover;
    background-repeat: no-repeat;
}
a {
    @apply flex p-3 hover:text-bcColor text-bcLightestSlate transition duration-500 ease-bcEasing;
}
</style>