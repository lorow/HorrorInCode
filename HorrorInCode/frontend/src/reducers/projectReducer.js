export const ProjectReducer = (
  state = { isSingle: false, data: [] },
  action
) => {
  switch (action.type) {

    case "SET_ALL_PROJECTS":
      return {
        isSingle: false,
        ...action.payload
      }

    case "SET_SINGLE_PROJECT":
      return {
        isSingle: true,
        ...action.payload
      }

    default: return state
  }
}