<template>
    <section>
        <h1 class="text-bcColorTitle">{{ title }}</h1>
        <p class="text-bcColorTitle">{{ content }}</p>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>