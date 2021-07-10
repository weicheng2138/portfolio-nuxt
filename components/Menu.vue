<template>
    <div>
        <div class="menuBtn z-50" :class="{ open: menuOpen }">
            <div class="menuBtnBurger"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menuOpen: {
            type: Boolean,
            require: true,
        },
        navLinks: {
            type: Array,
            require: true,
        },
    },
    methods: {
        test() {
            this.$emit("testStatus");
        },
    },
};
</script>

<style lang="scss" scoped>
.menuBtn {
    @apply flex justify-center items-center w-12 h-12 cursor-pointer transition;
}
.menuBtnBurger {
    @apply w-bcHamburgerWidth h-bcHamburgerLineHeight bg-bcColor rounded-bcBorderRadius;
    transition: all 0.5s ease-in-out;
}
.menuBtnBurger::before,
.menuBtnBurger::after {
    @apply w-bcHamburgerWidth h-bcHamburgerLineHeight bg-bcColor rounded-bcBorderRadius;
    content: "";
    position: absolute;
}

.menuBtnBurger::before {
    animation: beforeAniOut 0.5s forwards;
}
.menuBtnBurger::after {
    animation: afterAniOut 1s forwards;
}

/* Animation */
.menuBtn.open .menuBtnBurger {
    @apply bg-transparent;
}
.menuBtn.open .menuBtnBurger::before {
    animation: beforeAniIn 1s forwards;
}
.menuBtn.open .menuBtnBurger::after {
    animation: afterAniIn 1s forwards;
}

@keyframes beforeAniIn {
    0% {
        transform: translateY(-10px);
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
        transform: translateY(10px);
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
        transform: translateY(-10px);
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
        transform: translateY(10px);
    }
}
</style>