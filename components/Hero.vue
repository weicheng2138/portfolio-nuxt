<template>
    <section
        class="
            flex flex-col
            justify-center
            items-center
            min-h-screen
            p-0
            transition-all
            duration-300
            ease-in-out
        "
    >
        <!-- <div class="absolute">
            <span></span>
            <img
                src="@/static/img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"
                alt=""
            />
        </div> -->
        <div>
            <h1 class="bcColorFont mb-5 ml-0 sm:mb-8 sm:ml-1">
                Hi, my name is
            </h1>
            <h2 class="text-bcColorTitle bigHeading">Weicheng Hung.</h2>
            <h3 class="text-bcColorText bigHeading mt-3 leading-none">
                I build things for the web.
            </h3>
            <p class="text-bcColorText mt-5 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur quam architecto veniam exercitationem delectus
                voluptatibus mollitia ipsa officia. Non cumque perspiciatis
                sapiente assumenda quod totam iusto voluptatum maxime est
                asperiores!
            </p>
            <button class="bigButton text-bcSm py-5 px-7 mt-bcTouchButton">
                Get In Touch
            </button>
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