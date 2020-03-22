export const setBackgroundText = (text) => ({
  type: "SET_BACKGROUND_TEXT",
  payload: text
})

export const setVisualPageIndex = (index) => ({
  type: "SET_VISUAL_PAGE_INDEX",
  payload: index
})


// // dispatched when a nav button is pressed
// export const initPageTransition = (route) => ({
//   type: "INIT_PAGE_TRANSITION",
//   payload: route
// })

// // this will be catched by sagas
// export const animateTransition = ({ page, state, animator }) => ({
//   type: "ANIMATE_PAGE_TRANSITION",
//   payload: {
//     page, state, animator
//   }
// })

// // dispatched only after the exiting animation has finished
// export const completePageTransition = () => ({
//   type: "COMPLETE_PAGE_TRANSITION"
// })
