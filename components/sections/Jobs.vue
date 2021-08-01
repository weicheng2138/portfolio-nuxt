<template>
    <section class="max-w-[700px]">
        <h2 class="numberedHeading">Where I've Experienced</h2>
        <div class="flex min-h-[450px] sm:min-h-[300px]">
            <div class="flex flex-col relative w-max p-0 m-0 list-none">
                <button @click="actvieTabId = 0">NTU</button>
                <button @click="actvieTabId = 1">ANHE</button>
                <button @click="actvieTabId = 2">NCU</button>
                <button @click="actvieTabId = 3">NCUE</button>
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
                        <h3>R&D Substitute @ National Taiwan University</h3>
                        <p>August 2017 - June 2021</p>
                        <div>
                            <ul>
                                <li>
                                    Construct internal inventory system for lab
                                    by using RFID, Vue.js, Bootstrap and
                                    Firebase.
                                </li>
                                <li>Lab MIS.</li>
                                <li>Six-axis robot arm controlling.</li>
                                <li>
                                    Project execution which related to chemical
                                    engineering.
                                </li>
                                <li>
                                    Side Project: Nuxt portfolio with
                                    Tailwindcss and StoryBlok
                                </li>
                                <li>
                                    Side Project: Taifex data crawling and
                                    electron-vue desktop app.
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div id="1" v-if="actvieTabId === 1" class="absolute">
                        <h3>Co-Founder @ Anhe Three Dimensional Co.</h3>
                        <p>August 2015 - July 2017</p>
                        <div>
                            <ul>
                                <li>
                                    Algorithm implementation with Java which is
                                    refer to
                                    <a
                                        class="text-bcColor focus:outline-none"
                                        href="https://link.springer.com/article/10.1007/s00170-015-7071-9"
                                        target="_blank"
                                        >Zhang (2015)</a
                                    >.
                                </li>
                                <li>
                                    Design human interface for inkjet 3D printer
                                    with Vaadin and Three.js.
                                </li>
                                <li>
                                    Construct internal system with Angular 2,
                                    Spring Boot Rest API and using MySQL as data
                                    source.
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div id="2" v-if="actvieTabId === 2" class="absolute">
                        <h3>
                            SAP Student Instructor & Master @ National Center
                            University
                        </h3>
                        <p>June 2013 - July 2017</p>
                        <div>
                            <ul>
                                <li>Major in Industrial Management</li>
                                <li>
                                    SAP ERP student team leader of production
                                    planning.
                                </li>
                                <li>
                                    SAP product planning instructor for EMBA
                                    students.
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div id="3" v-if="actvieTabId === 3" class="absolute">
                        <h3>
                            Bachelor @ National Changhua University of Education
                        </h3>
                        <p>September 2009 - June 2013</p>
                        <div>
                            <ul>
                                <li>Major in Mathematics and Statstics.</li>
                                <li>Junior high tutor for math and nature.</li>
                                <li>
                                    Leader Editor of school year book in
                                    graduation student association.
                                </li>
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
    @apply font-mono items-center w-full h-bcTabHeight px-2 sm:px-5 pt-0 pb-[2px] bg-transparent
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
    @apply w-full relative h-auto py-[10px] px-1 ml-2 sm:ml-5;
    h3 {
        @apply mb-[2px] text-bcXl font-medium leading-tight md:text-bcXxl;
    }
    p {
        @apply mb-6 text-bcLightSlate font-mono text-xs;
    }
}
</style>