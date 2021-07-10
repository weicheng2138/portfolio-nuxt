<template>
    <div id="root">
        <Loading :isLoading="isLoading" />
        <div class="content relative" v-if="!isLoading">
            <AppBar
                :menuOpen="menuOpen"
                :navLinks="navLinks"
                @eventMenuStatus="updateMenuStatus"
                class="z-40 relative"
            />

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
                    @click="changeMenuStatus"
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
        updateMenuStatus(bool) {
            this.menuOpen = bool;
        },
        changeMenuStatus() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>
<style>
.content {
    @apply flex flex-col min-h-screen;
}
</style>
