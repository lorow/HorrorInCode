export const PageReducer = (
  state = { backgroundText: "", visualPageIndex: "01" },
  action
) => {
  switch (action.type) {
    case 'SET_BACKGROUND_TEXT':
      if (action.payload !== state.backgroundText)
        return {
          ...state,
          backgroundText: action.payload
        }
      else
        return state

    case "SET_VISUAL_PAGE_INDEX":
      if (action.payload !== state.visualPageIndex)
        return {
          ...state,
          visualPageIndex: action.payload
        }
      else
        return state

    default: return state
  }
}