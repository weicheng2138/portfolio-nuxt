import Vue from "vue";

// threshold is the poportion of the element in the browser view
const options = { threshold: [0.2] };
const animateOnScrollObserver = new IntersectionObserver(
    (entries, animateOnScrollObserver) => {
        entries.forEach((entry) => {
            console.log("A");
            console.log(entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.remove("before-enter");
                entry.target.classList.add("enter");
                animateOnScrollObserver.unobserve(entry.target);
            }
        });
    },
    options
);

Vue.directive("animate-on-scroll", {
    bind: (el) => {
        el.classList.add("before-enter");
        animateOnScrollObserver.observe(el);
    },
});
