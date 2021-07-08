<template>
    <div id="root">
        <Loading :isLoading="isLoading" />
        <div class="content" v-if="!isLoading">
            <AppBar class="z-50" />
            <Side :isHome="isHome" class="z-40" />
            <!-- <Side :isHome="isHome" :orientation="'left'" /> -->

            <main class="fillHeight relative z-30">
                <div class="inherit fixed inset-0"></div>
                <Nuxt />
                <Footer />
            </main>
        </div>
    </div>
</template>

<script>
import Loading from "~/pages/Loading.vue";
export default {
    components: { Loading },
    data() {
        return {
            isLoading: true,
            isHome: true,
        };
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    },
};
</script>
<style>
.content {
    @apply flex flex-col min-h-screen;
}
</style>
