import Vue from "vue";

// threshold is the poportion of the element in the browser view
const options = { threshold: [0.2] };
const animateOnScrollObserver = new IntersectionObserver(
    (entries, animateOnScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log(entry.target.tagName);
                if (entry.target.classList.contains("before-fade-down")) {
                    entry.target.classList.remove("before-fade-down");
                    entry.target.classList.add("fade-down");
                } else if (entry.target.classList.contains("before-fade-up")) {
                    entry.target.classList.remove("before-fade-up");
                    entry.target.classList.add("fade-up");
                } else if (entry.target.classList.contains("before-fade")) {
                    entry.target.classList.remove("before-fade");
                    entry.target.classList.add("fade");
                    // Scroll Observe
                } else if (entry.target.classList.contains("before-enter")) {
                    entry.target.classList.remove("before-enter");
                    entry.target.classList.add("enter");
                }
                setTimeout(() => {
                    entry.target.style.transitionDelay = "0ms";
                }, 2500);
                animateOnScrollObserver.unobserve(entry.target);
            }
        });
    },
    options
);

// Register the directives
Vue.directive("animate-on-scroll", {
    bind: (el) => {
        el.classList.add("transition");
        el.classList.add("before-enter");
        animateOnScrollObserver.observe(el);
    },
});

Vue.directive("animate-delay", {
    bind: (el, binding) => {
        el.classList.add("transition");
        el.style.transitionDelay = binding.value.toString() + "ms";
        animateOnScrollObserver.observe(el);

        if (binding.arg === "fade") {
            el.classList.add("before-fade");
        } else if (binding.arg === "fade-down") {
            el.classList.add("before-fade-down");
        } else if (binding.arg === "fade-up") {
            el.classList.add("before-fade-up");
        }
    },
});
