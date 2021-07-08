<template>
    <div id="root">
        <Loading :isLoading="isLoading" />
        <div class="content relative" v-if="!isLoading">
            <AppBar
                :menuOpen="menuOpen"
                :navLinks="navLinks"
                @eventMenuStatus="changeMenuStatus"
                class="z-50 relative"
            />
            <Drawer :open="menuOpen" :navLinks="navLinks" class="z-40 fixed" />
            <Side :isHome="isHome" class="z-30 relative" />

            <main class="fillHeight relative z-20">
                <div
                    v-if="menuOpen"
                    class="
                        inherit
                        fixed
                        inset-0
                        backdrop-filter backdrop-blur-sm
                    "
                ></div>
                <Nuxt />
                <Footer />
            </main>
        </div>
    </div>
</template>

<script>
import Loading from "~/pages/Loading.vue";
import { navLinks } from "@/config";
export default {
    components: { Loading },
    data() {
        return {
            isLoading: true,
            isHome: true,
            menuOpen: false,
            navLinks: navLinks,
        };
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    },
    methods: {
        changeMenuStatus: function (bool) {
            this.menuOpen = bool;
        },
    },
};
</script>
<style>
.content {
    @apply flex flex-col min-h-screen;
}
</style>
