const landingPage = {
  initial: {
    opacity: 0,
  },
  in: i => ({
    opacity: [0, 1],
    transition: {
      delay: i * .8
    }
  }),

  out: i => ({
    opacity: [1, 0],
    transition: {
      delay: i * 0.3
    }
  }),

  projectShowUp: {

  }
}

const blogPage = {
  initial: {
    opacity: 0,
  },
  in: i => ({
    opacity: [0, 1],
    transition: {
      delay: i * .8
    }
  }),

  out: i => ({
    opacity: [1, 0],
    transition: {
      delay: i * 0.3
    }
  }),
}

const aboutPage = {
  initial: {
    opacity: 0,
  },
  in: i => ({
    opacity: [0, 1],
    transition: {
      delay: i * .8
    }
  }),

  out: i => ({
    opacity: [1, 0],
    transition: {
      delay: i * 0.3
    }
  }),
}

export const rootTransition = {
  landing: landingPage,
  about: aboutPage,
  blog: blogPage,
}