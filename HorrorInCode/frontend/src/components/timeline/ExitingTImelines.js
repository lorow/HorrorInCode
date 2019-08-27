import anime from 'animejs';

export const timelines_exiting  = {
    home: () => {
        var t =anime.timeline({
            duration: 150,
            autoplay: false,
            easing: 'easeOutExpo'
        }).add({
            targets: '.landingPanel',
            opacity: [1, 0],
        })
        return t;
    },
    blog:() => (anime({
        targets: '.blog-section',
        opacity: [1,0],
        duration: 150,
        autoplay: false
    })),
    projects:() => (anime({
        
    })),
    about:() => (anime({
        
    })),
    contact:() => (anime({
        
    }))
}