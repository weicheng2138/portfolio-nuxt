<template>
    <div>
        <div class="side social">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur fugiat nihil atque
            </p>
        </div>
        <div class="side email">
            <a v-bind:href="`mailto:${email}`">{{ email }}</a>
        </div>
    </div>
</template>

<script>
import { email } from "~/config";
export default {
    data() {
        return {
            email: null,
        };
    },
    props: {
        isHome: Boolean,
        // orientation: String,
    },
    mounted() {
        // console.log(email);
        this.email = email;
    },
};
</script>

<style lang="scss" scoped>
.side {
    @apply w-10 fixed bottom-0 z-10;
}

.email {
    @apply left-auto hidden md:right-sideMd md:flex md:flex-col lg:right-sideLg;
    &:after {
        @apply block bg-bcLightSlate;
        content: "";
        width: 1px;
        height: 90px;
        margin: 0 auto;
    }
}

.social {
    @apply right-auto hidden md:left-sideMd md:flex lg:left-sideLg;
}

a {
    @apply my-5 mx-auto p-2 font-mono text-bcXxs leading-3 tracking-widest;
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
        @apply text-bcColor;
        transform: translateY(-3px);
    }
}
</style>
