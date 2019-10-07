import anime from 'animejs';

const getBackgroundItem = () =>{
    return document.getElementById("content__section");
}

export const timelines_entering  = {
    home:() => {
        var background_el = getBackgroundItem()

        var t =anime.timeline({
            duration: 750,
            autoplay: false,
            easing: 'easeOutExpo',
        }).add({
            delay: 300,
            update: anime => {
                background_el.style.cssText = "background: linear-gradient(to bottom, rgba(27,0, 86, "+ (Math.round(anime.progress)/100) * 1.2 +"), rgba(0, 0, 0,1));"
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
        var background_el = getBackgroundItem()

        var t = anime.timeline({
            duration: 450,
            autoplay: false,
            easing: 'easeOutExpo'
        })
        .add({
            delay: 300,
            update: anime => {
                background_el.style.cssText = "background: linear-gradient(210deg, rgba(27,0, 86, "+ (Math.round(anime.progress)/100) * 1.2 +"), rgba(0,0,0,1));"
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
        var background_el = getBackgroundItem()

        var t = anime.timeline({
            duration: 750,
            autoplay: false,
            easing: 'easeOutExpo'
        }).add({
            delay: 300,
            update: anime => {
                background_el.style.cssText = "background: radial-gradient( rgba(27,0, 86, "+ (Math.round(anime.progress)/100) * 1.2 +"), #0B023A 3% ,rgba(0,0,0,1));"
            },
        }).add({
            // duration:150,
            targets:'.blog__section__title',
            opacity:[0, 1]
        })

        return t;
    },
    about:() => {
        var background_el = getBackgroundItem()

        return anime({
        targets: '.about-section',
        opacity:[0, 1],
        duration: 750, 
        update: anime => {
            background_el.style.cssText =  "background: linear-gradient(to top, rgba(27,0, 86, "+ (Math.round(anime.progress)/100) * 1.2 +"), rgba(0, 0, 0,1));"
        },
        autoplay: false,
        
    })},
    contact:() => {
        var background_el = getBackgroundItem()

        return anime({
        targets: '.contact-section',
        opacity:[0, 1],
        duration: 750,
        update: anime => {
            background_el.style.cssText =  "background: linear-gradient(to left, rgba(27,0, 86, "+ (Math.round(anime.progress)/100) * 1.2 +"), rgba(0, 0, 0,1));"
            
        },
        autoplay: false
    })}
}