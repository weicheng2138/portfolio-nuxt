<template>
    <div>
        <div v-animate-delay:fade="2000" class="side social">
            <a
                v-bind:href="`${socialMedia[0].url}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                    stroke-width="2"
                >
                    <title>GitHub</title>
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                </svg>
            </a>
            <a
                v-bind:href="`${socialMedia[1].url}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                >
                    <title>Instagram</title>
                    <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                    ></rect>
                    <path
                        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    ></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            </a>
            <a
                v-bind:href="`${socialMedia[2].url}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin"
                    stroke-width="2"
                >
                    <title>LinkedIn</title>
                    <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    ></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>
            <a
                v-bind:href="`${socialMedia[3].url}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-codepen"
                >
                    <title>CodePen</title>
                    <polygon
                        points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                    ></polygon>
                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                    <line x1="12" y1="2" x2="12" y2="8.5"></line>
                </svg>
            </a>
        </div>
        <div v-animate-delay:fade="2050" class="side email">
            <a v-bind:href="`mailto:${email}`">{{ email }}</a>
        </div>
    </div>
</template>

<script>
import { email, socialMedia } from "~/config";
export default {
    data() {
        return {
            email: null,
            socialMedia: null,
        };
    },
    props: {
        isHome: Boolean,
        // orientation: String,
    },
    created() {
        // console.log(email);
        this.email = email;
        this.socialMedia = socialMedia;
    },
};
</script>

<style lang="scss" scoped>
.side {
    @apply w-10 fixed bottom-0 z-10 font-medium;
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

    a {
        @apply my-5 mx-auto p-2 font-mono text-bcXxs leading-3 tracking-widest;
        writing-mode: vertical-rl;
        &:hover,
        &:focus {
            @apply text-bcColor transition duration-500 ease-bcEasing;
            transform: translateY(-3px);
        }
    }
}

.social {
    @apply right-auto hidden md:left-sideMd md:flex md:flex-col lg:left-sideLg m-0 p-0;
    &:after {
        @apply block bg-bcLightSlate;
        content: "";
        width: 1px;
        height: 90px;
        margin: 0 auto;
    }
    a {
        @apply p-bcTabP list-none mb-2;
        &:last-of-type {
            margin-bottom: 20px;
        }

        &:hover,
        &:focus {
            @apply text-bcColor transition duration-500 ease-bcEasing;
            transform: translateY(-3px);
        }
        svg {
            width: 20px;
            height: 20px;
        }
    }
}
</style>
