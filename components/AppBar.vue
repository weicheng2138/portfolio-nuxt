<template>
    <div>
        <nav>
            <div class="logo">
                <NuxtLink to="/">Portfolio</NuxtLink>
            </div>
            <div>
                <div class="flex md:hidden">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="36px"
                            viewBox="0 0 24 24"
                            width="36px"
                            fill="#FFFFFF"
                        >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="36px"
                            viewBox="0 0 24 24"
                            width="36px"
                            fill="#FFFFFF"
                        >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                            />
                        </svg>
                    </a>
                </div>

                <div class="hidden md:flex">
                    <NuxtLink
                        v-for="(link, index) in navLinks"
                        :key="link.name"
                        :to="link.url"
                        class="navBtn"
                    >
                        <span class="text-bcColor font-normal"
                            >0{{ index + 1 }}.
                        </span>
                        {{ link.name }}
                    </NuxtLink>
                    <button class="bigButton ml-4 py-2 px-4">Resume</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { navLinks } from "@/config";
export default {
    data() {
        return {
            navLinks: navLinks,
        };
    },
    methods: {
        testBtn() {
            console.log(navLinks);
        },
    },
};
</script>

<style lang="scss" scoped>
nav {
    @apply flex justify-between items-center w-full font-mono h-bcNavHeight  px-6 md:px-10 lg:px-12;

    .logo {
        @apply font-bold text-bcColor;
    }
    .navBtn {
        @apply font-normal p-bcTabP mr-bcTabMR text-bcXs text-bcLightestSlate hover:text-bcColor;

        // &.nuxt-link-exact-active {
        //     @apply border-2 border-dashed border-bcColor text-bcColor;
        // }
    }
}
</style>