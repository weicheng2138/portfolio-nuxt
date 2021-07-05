<template>
    <div>
        <div class="side social">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur fugiat nihil atque
            </p>
        </div>
        <div class="side email">
            <p>
                Sit amet consectetur adipisicing elit. Pariatur fugiat nihil
                atque
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isHome: Boolean,
        // orientation: String,
    },
};
</script>

<style lang="scss" scoped>
.side {
    @apply w-10 fixed bottom-0 z-10;
}

.email {
    @apply left-auto hidden md:right-sideMd md:flex lg:right-sideLg;
}

.social {
    @apply right-auto hidden md:left-sideMd md:flex lg:left-sideLg;
}
</style>
