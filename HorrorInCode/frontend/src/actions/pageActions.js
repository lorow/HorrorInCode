export const setBackgroundText = (text) => ({
  type: "SET_BACKGROUND_TEXT",
  payload: text
})

export const setVisualPageIndex = (index) => ({
  type: "SET_VISUAL_PAGE_INDEX",
  payload: index
})

export const fetchBlogPosts = (pageCursor) => ({
  type: "FETCH_BLOG_POSTS",
  payload: pageCursor
})

export const fetchCompleteBlogPost = (postID) => ({
  type: "FETCH_COMPLETE_POST",
  paylaod: postID
})

export const fetchProjects = (pageCursor) => ({

})

export const fetchCompleteProject = (projectID) => ({
  type: "FETCH_PROJECT",
  payload: projectID
})