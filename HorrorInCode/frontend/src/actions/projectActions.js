export const fetchProjects = () => ({
  type: "FETCH_PROJECTS",
})

export const fetchCompleteProject = (projectID) => ({
  type: "FETCH_PROJECT",
  payload: projectID
})

export const setAllProjects = (data) => ({
  type: "SET_ALL_PROJECTS",
  payload: data
})

export const setSingleProject = (data) => ({
  type: "SET_SINGLE_PROJECT",
  payload: data
})