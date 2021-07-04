<template>
    <div>
        <div
            class="side right-side left-auto"
            v-if="orientation === 'right' ? true : false"
        >
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur fugiat nihil atque
            </p>
        </div>
        <div
            class="side left-side right-auto"
            v-if="orientation === 'left' ? true : false"
        >
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur fugiat nihil atque
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isHome: Boolean,
        orientation: String,
    },
};
</script>

<style lang="scss" scoped>
.side {
    @apply w-10 fixed bottom-0 z-10;
}
</style>

/**
* 
:class="{
            [` right-${orientation === 'left' ? 'auto' : 'side'}`]: true,
            [`left-${orientation === 'left' ? 'side' : 'auto'}`]: true,
        }"
*/