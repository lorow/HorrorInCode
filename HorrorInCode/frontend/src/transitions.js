const landingPage = {
  in: i => ({
    opacity: [0, 1],
    transition: {
      delay: i * 0.3
    }
  }),

  out: i => ({
    opacity: [1, 0],
    transition: {
      delay: i * 0.3
    }
  }),
}

const blogPage = {

}

const aboutPage = {

}

export const rootTransition = {
  landing: landingPage,
  about: aboutPage,
  blog: blogPage,
}