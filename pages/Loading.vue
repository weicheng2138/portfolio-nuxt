<template lang="html">
    <div class="loading-page" v-if="isLoading">
        <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
        >
                        <g id="weiLogo">
                            <path
                                id="wei"
                                d="M41.416 56.0234L45.1348 37.8281H49.3018L43.7236 62H39.7061L35.1074 44.3525L30.4092 62H26.375L20.7969 37.8281H24.9639L28.7158 55.9902L33.3311 37.8281H36.8506L41.416 56.0234ZM66.501 51.209H56.5732V58.6465H68.1777V62H52.373V37.8281H68.0615V41.2148H56.5732V47.8887H66.501V51.209ZM76.0303 62H71.8467V37.8281H76.0303V62Z"
                                fill="#64ffda"
                            />
                            <path
                                id="frame"
                                d="M83.5748 29.9083L83.5866 29.9293L83.5989 29.95L94.6376 48.5484C95.0111 49.1777 95.0111 49.9607 94.6376 50.59L83.5989 69.1884L83.5866 69.2091L83.5748 69.2302L72.9874 88.0892C72.6292 88.7273 71.9511 89.1188 71.2194 89.11L49.5933 88.8494L49.5692 88.8491L49.5451 88.8494L27.9191 89.11C27.1873 89.1188 26.5092 88.7273 26.151 88.0892L15.5637 69.2302L15.5519 69.2091L15.5396 69.1884L4.50085 50.59C4.12735 49.9607 4.12735 49.1777 4.50085 48.5484L15.5396 29.95L15.5519 29.9293L15.5637 29.9083L26.151 11.0493C26.5092 10.4112 27.1873 10.0196 27.9191 10.0285L49.5451 10.2891L49.5692 10.2894L49.5933 10.2891L71.2194 10.0285C71.9511 10.0196 72.6292 10.4112 72.9874 11.0493L83.5748 29.9083Z"
                                stroke="#64ffda"
                                stroke-width="4"
                                class="
                                    transition
                                    duration-250
                                    ease-bcEasing
                                    hover:bg-opacity-10
                                    hover:fill-current
                                    text-green-600
                                "
                                fill-opacity="0.1"
                />
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            require: true,
        },
    },
};
</script>

<style scoped>
.loading-page {
    @apply flex justify-items-center items-center bg-bcDarkNavy;
}

#wei,
#frame {
    animation: fadeInUp 2s;
    animation-fill-mode: forwards;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20%);
    }
    70% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
    }
}
</style>