<template>
    <div
        class="
            bg-bcLightNavy
            text-bcLightestSlate
            w-64
            fixed
            inset-y-0
            right-0
            transform
            translate-x-full
            transition
            duration-200
            ease-in-out
            h-screen
        "
        :class="{ translateDrawer: open }"
    >
        <div class="flex flex-col items-center justify-center w-full h-full">
            <NuxtLink
                v-for="(link, index) in navLinks"
                :key="link.name"
                :to="{ path: link.url }"
                class="linkParent navBtn mb-7"
                @click.native="emitCloseDrawer()"
            >
                <div class="linkElement">{{ link.name }}</div>
            </NuxtLink>
            <button class="bigButton text-bcXs ml-4 py-2 px-4">Resume</button>
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
.linkParent {
    counter-reset: num;
}
.linkElement::before {
    counter-increment: num;
    content: "0" counter(num) ".";
}
</style>