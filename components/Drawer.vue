<template>
    <div
        class="
            drawer
            bg-bcLightNavy
            text-bcLightestSlate
            fixed
            inset-y-0
            right-0
            transform
            translate-x-full
            transition
            duration-300
            ease-in-out
            h-screen
        "
        :class="{ translateDrawer: open }"
    >
        <div
            class="
                linkParent
                flex flex-col
                items-center
                justify-center
                w-full
                h-full
                text-center
            "
        >
            <NuxtLink
                v-for="link in navLinks"
                :key="link.name"
                :to="{ path: link.url }"
                class="
                    linkElement
                    navBtn
                    mb-7
                    focus:outline-none
                    hover:text-bcColor
                "
                @click.native="emitCloseDrawer()"
            >
                {{ link.name }}
            </NuxtLink>
            <a
                href="/weichenghung_cv.pdf"
                target="_blank"
                class="bigButton text-bcXs py-4 px-12 mx-auto mt-8 min-w-max"
            >
                Resume
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            require: true,
        },
        navLinks: {
            type: Array,
            require: true,
        },
    },
    methods: {
        emitCloseDrawer() {
            this.$emit("eventCloseDrawer");
        },
    },
};
</script>

<style lang="scss" scoped>
.translateDrawer {
    @apply transform translate-x-0;
}
.drawer {
    width: min(75vw, 400px);
}
.linkParent {
    list-style: none;
}
.linkElement {
    counter-increment: num;
    font-size: clamp(14px, 4vw, 18px);
}
.linkElement::before {
    @apply text-bcColor block text-bcSm cursor-default;
    content: "0" counter(num) ".";
}
</style>