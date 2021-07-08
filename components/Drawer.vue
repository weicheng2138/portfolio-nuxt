<template>
    <div
        class="
            sideBar
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
        "
        :class="{ translateDrawer: open }"
    >
        <nav class="flex flex-col items-center justify-center w-full h-full">
            <NuxtLink
                v-for="(link, index) in navLinks"
                :key="link.name"
                :to="{ path: link.url }"
                class="navBtn"
            >
                <span class="text-bcColor font-normal">0{{ index + 1 }}. </span>
                {{ link.name }}
            </NuxtLink>
            <button class="bigButton text-bcXs ml-4 py-2 px-4">Resume</button>
        </nav>
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
};
</script>

<style lang="scss" scoped>
.translateDrawer {
    @apply transform translate-x-0;
}
</style>