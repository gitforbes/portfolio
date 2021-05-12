// FADE ON SCROLL

function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }

    const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    const elementHeight = element.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;

    let opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }

    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
}

function scrollHandler() {
    fadeOutOnScroll(document.getElementById('#splash'));
    fadeOutOnScroll(document.getElementById('#profile'));
}

window.addEventListener('scroll', scrollHandler);