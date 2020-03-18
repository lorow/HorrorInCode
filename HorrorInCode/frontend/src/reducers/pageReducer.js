export const PageReducer = (state = { isTransitioning: false, backgroundText: "", visualPageIndex: "01" }, action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_TEXT':
      return {
        ...state,
        backgroundText: action.payload
      }

    case "SET_VISUAL_PAGE_INDEX":
      return {
        ...state,
        visualPageIndex: action.payload
      }

    default: return state
  }
}