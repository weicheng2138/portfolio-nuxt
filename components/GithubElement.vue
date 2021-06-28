<template>
    <section>
        <article class="post-preview">
            <div
                :style="{ backgroundImage: 'url(' + thumbnailImg + ')' }"
                class="post-preview-thumbnail"
            ></div>
            <div class="post-preview-content">
                <h1>{{ title }}</h1>
                <p>{{ excerpt }}</p>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            require: true,
        },
        excerpt: {
            type: String,
            require: true,
        },
        thumbnailImg: {
            type: String,
            require: true,
        },
        id: {
            type: String,
            require: true,
        },
    },
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: black;
}
.post-preview {
    background-color: antiquewhite;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    width: 90%;
    height: 20rem;
    margin: 1rem;
}
.post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
}
.post-preview-content {
    text-align: center;
    padding: 1rem;
}
@media (min-width: 35rem) {
    .post-preview {
        width: 25rem;
    }
}
</style>