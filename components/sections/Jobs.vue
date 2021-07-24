<template>
    <section class="max-w-[700px]">
        <h2 class="numberedHeading">Where I've Experienced</h2>
        <div class="flex min-h-[340px]">
            <div class="flex flex-col relative w-max p-0 m-0 list-none">
                <button @click="actvieTabId = 0">NCUE</button>

                <button @click="actvieTabId = 1">NCU</button>
                <button @click="actvieTabId = 2">ANHE</button>
                <button @click="actvieTabId = 3">NTU</button>
                <span
                    class="highLight"
                    :style="{
                        transform:
                            'translateY(calc(' + actvieTabId * 42 + 'px))',
                    }"
                ></span>
            </div>
            <div class="inner">
                <transition name="fade">
                    <div id="0" v-if="actvieTabId === 0" class="absolute">
                        <h3>
                            Student @ National Changhua Education University
                        </h3>
                        <p>May 2012 - June 2015</p>
                        <div>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iure eligendi nesciunt
                                    enim recusandae cumque?
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div id="1" v-if="actvieTabId === 1" class="absolute">
                        <h3>Student @ National Center University</h3>
                        <p>May 2012 - June 2015</p>
                        <div>
                            <ul>
                                <li>
                                    Amet consectetur adipisicing elit. Iure
                                    eligendi nesciunt enim recusandae cumque?
                                </li>
                                <li>
                                    Dsum dolor sit amet consectetur adipisicing
                                </li>
                                <li>Eet consectetur adipisicing</li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div id="2" v-if="actvieTabId === 2" class="absolute">
                        <h3>Software Engineer @ ANHE Three Dimensional</h3>
                        <p>May 2012 - June 2015</p>
                        <div>
                            <ul>
                                <li>
                                    Amet consectetur adipisicing elit. Iure
                                    eligendi nesciunt enim recusandae cumque?
                                </li>
                                <li>
                                    Dsum dolor sit amet consectetur adipisicing
                                </li>
                                <li>Eet consectetur adipisicing</li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div id="3" v-if="actvieTabId === 3" class="absolute">
                        <h3>Post-graduated @ National Taiwan University</h3>
                        <p>May 2012 - June 2021</p>
                        <div>
                            <ul>
                                <li>
                                    Amet consectetur adipisicing elit. Iure
                                    eligendi nesciunt enim recusandae cumque?
                                </li>
                                <li>
                                    Dsum dolor sit amet consectetur adipisicing
                                </li>
                                <li>Eet consectetur adipisicing</li>
                            </ul>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            actvieTabId: 0,
            tabContent: [
                {
                    title: "Student @National Changhua Education University",
                    period: "May 2012 - June 2015",
                    headlines: [
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                    ],
                },
                {
                    title: "Student @National Center University",
                    period: "May 2015 - June 2019",
                    headlines: [
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                    ],
                },
            ],
            temp: "red",
        };
    },
    transition: {
        name: "fade",
    },
};
</script>

<style lang="scss" scoped>
li {
    @apply relative mb-[10px] pl-5 font-mono text-bcSm;
    &:before {
        content: "▹";
        @apply absolute left-0 text-bcColor text-bcSm leading-3 overflow-hidden;
    }
}

.fade-enter-active {
    @apply transition-all duration-1000;
}
.fade-leave-active {
    @apply transition-all duration-500;
}
.fade-enter,
.fade-leave-active {
    @apply opacity-0;
}

button {
    @apply font-mono items-center w-full h-bcTabHeight px-5 pt-0 pb-[2px] bg-transparent
    border-l-2 border-solid border-bcLightestNavy focus:outline-none 
    text-bcXl text-left whitespace-nowrap hover:bg-bcLightNavy focus:bg-bcLightNavy
    hover:text-bcColor focus:text-bcColor transition duration-500 ease-in-out;
}
.highLight {
    @apply absolute top-0 left-0 w-[2px] h-bcTabHeight rounded bg-bcColor transition-all delay-100;
}
.content {
    @apply relative w-full h-auto py-[10px] px-1;
    h3 {
        @apply mb-[2px] text-bcXl font-medium	leading-tight md:text-bcXxl;
    }
    p {
        @apply mb-6 text-bcLightSlate font-mono text-xs;
    }
}
.inner {
    @apply w-full relative h-auto py-[10px] px-1 ml-5;
    h3 {
        @apply mb-[2px] text-bcXl font-medium leading-tight md:text-bcXxl;
    }
    p {
        @apply mb-6 text-bcLightSlate font-mono text-xs;
    }
}
</style>