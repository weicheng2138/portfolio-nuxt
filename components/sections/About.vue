<template>
    <section class="max-w-900">
        <h2 class="numberedHeading">About Me</h2>
        <div class="block md:grid grid-flow-col grid-cols-5 grid-rows-1 gap-12">
            <div class="col-span-3">
                <div>
                    <p class="my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit molestiae tenetur ex necessitatibus libero magnam a
                        perferendis possimus itaque, enim modi assumenda. Ipsa
                        pariatur commodi ut, ipsam dolorem neque sequi?
                    </p>
                    <p class="my-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolorem, optio explicabo? Cum soluta
                    </p>
                    <p>
                        Here are a few technologies I've been working with
                        recently:
                    </p>
                </div>
                <ul
                    class="
                        mt-5
                        overflow-hidden
                        list-none
                        grid grid-flow-col grid-cols-2 grid-rows-2
                        gap-y-0 gap-x-4
                    "
                >
                    <li
                        class="relative mb-[10px] pl-5 font-mono text-bcSm"
                        v-for="skill in skills"
                        :key="skill"
                    >
                        {{ skill }}
                    </li>
                </ul>
            </div>
            <div class="col-span-2 max-w-[300px] mt-6 mb-60 mx-auto imgWrapper">
                <img src="~/static/img/me_with-back-ground.png" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: ["JavaScript (ES6+)", "Vue", "Node.js", "Kotlin"],
        };
    },
};
</script>

<style lang="scss" scoped>
p {
    @apply text-bcLg;
}
li:before {
    content: "▹";
    @apply absolute left-0 text-bcColor text-bcSm leading-3 overflow-hidden;
}

.imgWrapper {
    @apply block relative w-full rounded-xl bg-bcColor;
    &:hover,
    &:focus {
        @apply bg-transparent outline-none;

        &:after {
            @apply top-[15px] left-[15px];
        }

        img {
            filter: none;
            mix-blend-mode: normal;
        }
    }

    img {
        @apply relative rounded-xl transition-all z-50;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
    }

    &:before,
    &:after {
        content: "";
        @apply block absolute w-full h-full rounded-xl transition-all;
    }

    &:before {
        @apply top-0 left-0  bg-bgColor z-50;
        mix-blend-mode: screen;
    }

    &:after {
        @apply border-2	border-solid border-bcColor top-[20px] left-[20px] z-0;
    }
}
</style>