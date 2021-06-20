<template>
    <div>
        <nav>
            <div class="logo">
                <NuxtLink to="/">Portfolio</NuxtLink>
            </div>
            <div>
                <a href="#">
                    mobile menu
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="36px"
                        viewBox="0 0 24 24"
                        width="36px"
                        fill="#FFFFFF"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="36px"
                        viewBox="0 0 24 24"
                        width="36px"
                        fill="#FFFFFF"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                        />
                    </svg>
                </a>
                <NuxtLink to="/404" class="btn">About</NuxtLink>
                <NuxtLink to="/404" class="btn">Experience</NuxtLink>
                <NuxtLink to="/404" class="btn">Work</NuxtLink>
                <NuxtLink to="/404" class="btn">Contact</NuxtLink>
                <NuxtLink to="/404" class="btn">Resume</NuxtLink>
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
    @apply flex justify-between items-center py-2 px-10 w-full shadow-lg font-fira-code;

    .logo {
        @apply p-4 font-bold text-emerald-400;
    }
    .btn {
        @apply px-4 py-2 text-gray-500 rounded-lg hover:bg-emerald-100 hover:text-emerald-700;

        &.nuxt-link-exact-active {
            @apply bg-emerald-100 text-emerald-700;
        }
    }
}
</style>