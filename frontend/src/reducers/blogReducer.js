export const BlogReducer = (
  state = { isSingle: false, data: [], pageInfo: {} },
  action
) => {
  switch (action.type) {

    case "SET_BLOG_POSTS":
      return {
        isSingle: false,
        ...action.payload
      }

    case "SET_BLOG_POST_SINGLE":
      return {
        isSingle: true,
        pageInfo: {},
        ...action.payload
      }

    default: return state
  }
}