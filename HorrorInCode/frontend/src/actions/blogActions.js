export const fetchBlogPosts = (pageCursor) => ({
  type: "FETCH_BLOG_POSTS",
  payload: pageCursor
})

export const fetchCompleteBlogPost = (postID) => ({
  type: "FETCH_COMPLETE_POST",
  paylaod: postID
})

export const setBlogPosts = ({ data, pageInfo }) => ({
  type: "SET_BLOG_POSTS",
  payload: { data, pageInfo }
})

export const setSingleBlogPost = (data) => ({
  type: "SET_BLOG_POST_SINGLE",
  payload: data
})
