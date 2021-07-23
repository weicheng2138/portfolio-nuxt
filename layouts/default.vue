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
                <overlay
                    v-if="menuOpen"
                    class="z-20"
                    @click.native="changeMenuStatus"
                ></overlay>
                <Nuxt class="z-0" />
                <Footer />
            </main>
        </div>
    </div>
</template>

<script>
import Loading from "~/pages/Loading.vue";
import { navLinks } from "@/config";
import Overlay from "~/components/Overlay.vue";
export default {
    components: { Loading, Overlay },
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
        }, 3000);
    },
    watch: {
        menuOpen: function () {
            if (this.menuOpen) {
                document
                    .querySelector("body")
                    .setAttribute("style", "overflow:hidden");
            } else {
                document
                    .querySelector("body")
                    .setAttribute("style", "overflow:auto");
            }
        },
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
