<template>
    <section id="404-page">
        <div class="wrapper">
            <div class="card">
                <h1 class="title">404</h1>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga
                dolor maxime necessitatibus tempore et excepturi laudantium vero
                iusto id. Aspernatur amet doloribus eligendi modi quibusdam
                necessitatibus vero. Porro, perferendis?
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.wrapper {
    @apply min-h-screen flex flex-col justify-center items-center text-center mx-auto;
}

.card {
    @apply p-5 rounded-lg text-emerald-500 bg-emerald-100 shadow-lg;
    .title {
        @apply text-6xl font-bold;
    }
}
</style>