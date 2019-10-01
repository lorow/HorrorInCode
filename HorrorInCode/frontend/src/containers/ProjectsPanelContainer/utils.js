import anime from 'animejs';

export const prepareAnimation = direction => {
    let timeline = anime.timeline({
      duration: 1000,
      autoplay: false,
      direction: direction,
    })
  
    timeline.add({
    
      duration:750,
      targets: '.project__cover',
      overflowX:'hidden',
  
      width:['60vh', '300vh'],
      height:['60vh', '100vh'],
      borderRadius:['100%','0%'],
  
      easing: 'cubicBezier(0.620, -0.420, 0.390, 1.385)'
  
    }).add({
      targets:'.project__title',
      color: ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 1)'],
      translateY: [0, -100],
      easing: 'cubicBezier(0.315, 0.000, 0.330, 0.825)'
    })
    return timeline
  }
