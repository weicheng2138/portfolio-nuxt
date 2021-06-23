<template>
    <section>
        <!-- <div class="absolute">
            <span></span>
            <img
                src="@/static/img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"
                alt=""
            />
        </div> -->
        <div>
            <h1 class="bcColorFont pb-5 pl-1">Hi, my name is</h1>
            <h2 class="text-bcColorTitle bigHeading">Weicheng Hung.</h2>
            <h3 class="text-bcColorText bigHeading mt-3 leading-none">
                I build things for the web.
            </h3>
            <p class="text-bcColorText mt-5 max-w-heroP">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur quam architecto veniam exercitationem delectus
                voluptatibus mollitia ipsa officia. Non cumque perspiciatis
                sapiente assumenda quod totam iusto voluptatum maxime est
                asperiores!
            </p>
            <button class="bigButton mt-12">Get In Touch</button>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bigHeading {
    font-size: clamp(40px, 8vw, 80px);
    @apply font-semibold;
}
</style>