<template>
    <div id="root">
        <Loading :isLoading="isLoading" />
        <div class="content" v-if="!isLoading">
            <AppBar />
            <Side :isHome="isHome" :orientation="'right'" />
            <Side :isHome="isHome" :orientation="'left'" />
            <main class="fillHeight">
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
