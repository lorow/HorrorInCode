import anime from 'animejs';

export const timelines_entering  = {
    home:() => {
        var t =anime.timeline({
            duration: 1050,
            autoplay: false,
            easing: 'easeOutExpo'
        }).add({
            delay: 300
        }).add({
            delay: anime.stagger(400),
            targets: '.anime-stagger',
            opacity: [0, 1],
        })
        return t;
    },
    blog:() => (anime({
        targets: '.blog-section',

        opacity:[0, 1],
        duration: 750,
        autoplay: false
    })),
    projects:() => (anime({
        targets: '.project__section',

        opacity:[0, 1],
        duration: 750,
        autoplay: false
    })),
    about:() => (anime({
        targets: '.about-section',
        opacity:[0, 1],
        duration: 750,
        autoplay: false
    })),
    contact:() => (anime({
        targets: '.contact-section',

        opacity:[0, 1],
        duration: 750,
        autoplay: false
    }))
}