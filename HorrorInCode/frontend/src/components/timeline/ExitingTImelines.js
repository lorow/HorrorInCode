import anime from 'animejs';

export const timelines_exiting  = {
    
    home: () => {

        var background_el = document.getElementById("content__section");

        var t =anime.timeline({
            duration: 750,
            delay:300,
            autoplay: false,
            easing: 'easeOutExpo',
            update: anime => {
                console.log((1 - (Math.round(anime.progress)/100) * 1.2));
                background_el.style.cssText = "background: linear-gradient(0deg, rgba(8,0,51, "+  (1 - (Math.round(anime.progress)/100) * 1.2) +"), rgba(0,0,0,1));"
            },
        }).add({
            targets: '.landingPanel',
            opacity: [1, 0],
        })
        return t;
    },
    blog:() => (anime({
        // targets: '.blog-section',
        // opacity: [.5,0],
        // duration: 150,
        // autoplay: false
    })),
    projects:() => (anime({
        
    })),
    about:() => (anime({
        
    })),
    contact:() => (anime({
        
    }))
}