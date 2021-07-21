<template>
    <li class="relative flex justify-end mb-7 sm:mb-16 md:mb-24">
        <div class="imgContainer"></div>
        <!-- <img
            class="
                z-0
                absolute
                left-0
                filter
                opacity-20
                grayscale
                h-[30vh]
                object-cover
                transition-all
                md:hover:cursor-pointer
                md:hover:filter-none
                md:hover:opacity-100
                md:w-8/12
                md:top-1/4
                md:h-auto
            "
            src="~/static/img/portfolio_screenshot.png"
            alt=""
        /> -->
        <div
            class="
                z-10
                relative
                mx-4
                sm:mx-8
                mt-[10%]
                flex flex-col
                md:items-end
                md:w-8/12
            "
        >
            <h3 class="text-bcColor font-mono text-bcXxs pb-3">
                Featured Project
            </h3>
            <h3 class="text-bcWhite pb-6">Portfolio</h3>
            <p
                class="
                    text-bcMd
                    pb-6
                    md:bg-bcLightNavy
                    md:p-4
                    md:mb-4
                    md:rounded-md
                    md:shadow-lg
                    md:text-right
                "
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quibusdam sunt autem laborum minima asperiores aperiam sequi
                unde eos iste, ut itaque officia hic eum totam! Similique
                suscipit velit eius.
            </p>
            <ul class="flex flex-row font-mono text-bcXs pb-4">
                <li class="pr-3">Nuxt.js</li>
                <li class="pr-3">Tailwindcss</li>
                <li class="pr-3">GitHub API</li>
            </ul>
            <div class="flex flex-row -ml-3">
                <a target="_blank" rel="noopener noreferrer" class="p-3">
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
                <a target="_blank" rel="noopener noreferrer" class="p-3">
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
export default {};
</script>

<style lang="scss" scoped>
.imgContainer {
    @apply z-0 absolute left-0 bg-bcColor opacity-20 bg-blend-multiply h-[30vh] w-full transition-all md:hover:cursor-pointer
    md:hover:bg-blend-normal md:opacity-100 md:w-8/12 md:top-1/4;
    background-image: url("~/static/img/portfolio_screenshot.png");
    background-size: cover;
    background-repeat: no-repeat;
}
</style>