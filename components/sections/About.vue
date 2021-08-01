<template>
    <section class="max-w-900 h-auto">
        <h2 class="numberedHeading">About Me</h2>
        <div class="block md:grid grid-flow-col grid-cols-5 grid-rows-1 gap-12">
            <div class="col-span-3">
                <div>
                    <p class="my-4">
                        I'm a whiz at interpreting data and transforming it into
                        useful information.
                    </p>
                    <p class="my-4">
                        The reason why I'm interested in web development started
                        back in 2015 when I am struggle in develop an internal
                        system with JavaServer Pages（JSP）in Anhe. After that
                        we switch the developing direction to Angular 2, then
                        every turns out to be bright and interesting.
                    </p>
                    <p class="my-4">
                        Problem based learning is always my key way of solving
                        problems which clear my purpose and also solve the
                        problem effetively.
                    </p>
                    <p>
                        Here are technologies I've been working with recently:
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
            <div class="col-span-2 max-w-[300px] mt-6 mb-60 mx-auto">
                <div class="imgWrapper">
                    <img src="~/static/img/me_with-back-ground.jpg" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: ["JavaScript (ES6+)", "Vue", "Node.js"],
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
        }
    }

    img {
        @apply relative rounded-xl transition-all z-50 inline-block;
        filter: grayscale(100%) contrast(1);
    }

    &:before,
    &:after {
        content: "";
        @apply block absolute w-full h-full rounded-xl transition-all;
    }

    &:before {
        @apply top-0 left-0 bg-bgColor z-50;
    }

    &:after {
        @apply border-2	border-solid border-bcColor top-[20px] left-[20px] z-0;
    }
}
</style>