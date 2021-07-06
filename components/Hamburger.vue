<template>
    <div class="menuBtn" :class="{ open: menuOpen }">
        <div class="menuBtnBurger"></div>
    </div>
</template>

<script>
export default {
    props: {
        menuOpen: {
            type: Boolean,
            require: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.menuBtn {
    @apply flex justify-center items-center w-12 h-12 cursor-pointer transition;
    // transition: all 0.5s ease-in-out;
}
.menuBtnBurger {
    width: 40px;
    height: 3px;
    background: #fff;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
}
.menuBtnBurger::before,
.menuBtnBurger::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 3px;
    background: #fff;
    border-radius: 3px;
}

.menuBtnBurger::before {
    // background: #EE2E2B;
    // transform: translateY(-16px);
    animation: beforeAniOut 0.5s forwards;
}
.menuBtnBurger::after {
    // background: #2B8AEE;
    // transform: translateY(16px);
    animation: afterAniOut 1s forwards;
}

/* Animation */
.menuBtn.open .menuBtnBurger {
    @apply bg-transparent;
}
.menuBtn.open .menuBtnBurger::before {
    animation: beforeAniIn 1s forwards;
    // animation-name: beforeAni;
    // animation-duration: 1s;
    // animation-fill-mode: forwards;
    // animation-direction: alternate;
}
.menuBtn.open .menuBtnBurger::after {
    animation: afterAniIn 1s forwards;
    // animation-name: afterAni;
    // animation-duration: 1s;
    // animation-fill-mode: forwards;
    // animation-direction: alternate;
}

@keyframes beforeAniIn {
    0% {
        transform: translateY(-13px);
    }
    50% {
        transform: translate(0px, 0px);
    }
    100% {
        transform: rotate(45deg);
    }
}
@keyframes afterAniIn {
    0% {
        transform: translateY(13px);
    }
    50% {
        transform: translate(0px, 0px);
    }
    100% {
        transform: rotate(-45deg);
    }
}
@keyframes beforeAniOut {
    0% {
        transform: rotate(45deg);
    }
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: translateY(-13px);
    }
}
@keyframes afterAniOut {
    0% {
        transform: rotate(-45deg);
    }
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: translateY(13px);
    }
}
</style>