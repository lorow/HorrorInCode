import anime from 'animejs';

export const timelines_entering  = {
    home:() => {
        var background_el = document.getElementById("content__section");

        var t =anime.timeline({
            duration: 750,
            autoplay: false,
            easing: 'easeOutExpo',
        }).add({
            delay: 300,
            update: anime => {
                background_el.style.cssText = "background: linear-gradient(0deg, rgba(8,0,51, "+ (Math.round(anime.progress)/100) * 1.2 +"), rgba(0,0,0,1));"
            },
        }).add({
            targets: '.anime-stagger',
            delay: anime.stagger(350),
            opacity: {
                value: [0, 1],
                duration: 600
            },
        })
        return t;
    },
    blog:() => {
        var background_el = document.getElementById("content__section");

        var t = anime.timeline({
            duration: 450,
            autoplay: false,
            easing: 'easeOutExpo'
        })
        .add({
            delay: 300,
            update: anime => {
                background_el.style.cssText = "background: linear-gradient(10deg, rgba(8,0,51, "+ (Math.round(anime.progress)/100) * 1.2 +"), rgba(0,0,0,1));"
            },
        }).add({
            targets:'.blog__section__title',
            opacity:[0, 1]
        }).add({
            targets:'.blog__section__title--decoration',
            duration:250,
            width: ['0px', '100px']
        }).add({
            delay:anime.stagger(200),
            targets:'.blog__article',
            opacity:[0,1]
        })

        return t;
    },

    projects: () => {
        var background_el = document.getElementById("content__section");

        var t = anime.timeline({
            duration: 750,
            autoplay: false,
            easing: 'easeOutExpo'
        }).add({
            delay: 300,
            update: anime => {
                background_el.style.cssText = "background: radial-gradient( rgba(8,0,51, "+ (Math.round(anime.progress)/100) * 1.2 +"), #0B023A 3% ,rgba(0,0,0,1));"
            },
        }).add({
            // duration:150,
            targets:'.blog__section__title',
            opacity:[0, 1]
        })

        return t;
    },
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