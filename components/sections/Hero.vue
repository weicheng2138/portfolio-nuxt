<template>
    <section class="flex flex-col justify-center items-start min-h-screen p-0">
        <!-- <div class="absolute">
            <span></span>
            <img
                src="@/static/img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"
                alt=""
            />
        </div> -->
        <div>
            <h1
                v-animate-delay:fade-up="1200"
                class="bcColorFont mb-[30px] ml-1 sm:mb-5 sm:ml-[2px]"
            >
                Hi, my name is
            </h1>
            <h2
                v-animate-delay:fade-up="1300"
                class="text-bcColorTitle bigHeading"
            >
                Weicheng Hung.
            </h2>
            <h3
                v-animate-delay:fade-up="1400"
                class="text-bcSlate bigHeading mt-2 leading-[0.9]"
            >
                I create things and enjoy the process of it.
            </h3>
            <p
                v-animate-delay:fade-up="1500"
                class="text-bcSlate mt-5 mb-0 max-w-lg leading-[1.3] text-bcLg"
            >
                I'm a software engineer specializing in building interfaces and
                application of web. Since I have not worked in a solid software
                team, I would like to join one to improve my co-working skill
                and UX techniques.
            </p>
            <a
                v-animate-delay:fade-up="1600"
                href="mailto:weicheng2138@gmail.com"
                class="
                    flex
                    bigButton
                    text-bcSm
                    px-7
                    py-5
                    w-max
                    mt-bcTouchButton
                "
            >
                Get In Touch
            </a>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bcColorFont {
    @apply text-bcColor font-mono font-normal;
    font-size: clamp(14px, 5vw, 16px);
}
</style>