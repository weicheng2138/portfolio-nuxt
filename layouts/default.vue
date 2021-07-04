<template>
    <div id="root">
        <Loading :isLoading="isLoading" />
        <div v-if="!isLoading">
            <AppBar />
            <div class="sideElementLeft"></div>
            <div class="sideElementRight"></div>
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
</style>
