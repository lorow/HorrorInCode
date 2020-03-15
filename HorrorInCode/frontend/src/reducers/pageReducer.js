export const PageReducer = (state = { isTransitioning: false, backgroundText: "" }, action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_TEXT':
      return {
        ...state,
        backgroundText: action.payload
      }

    default: return state
  }
}