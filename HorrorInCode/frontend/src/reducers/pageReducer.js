import { history } from '../history';

export const PageReducer = (
  state = { isTransitioning: false, backgroundText: "", visualPageIndex: "01", route: "" },
  action
) => {
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

    case "INIT_PAGE_TRANSITION":
      return {
        ...state,
        isTransitioning: true,
        route: action.payload
      }

    case "COMPLETE_PAGE_TRANSITION":
      history.push(state.route);
      return {
        ...state,
        isTransitioning: false,
        route: ""
      }

    default: return state
  }
}