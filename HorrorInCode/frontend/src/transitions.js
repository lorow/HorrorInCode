const landingPage = {
  initial: {
    opacity: 0,
  },
  in: i => ({
    opacity: [0, 1],
    transition: {
      delay: i * .5,
      duration: .4,
    },

  }),

  out: i => ({
    opacity: [1, 0],
    transition: {
      delay: i * 0.1,
      duration: .2
    },

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
      delay: i * .5,
      duration: .4,
    }
  }),

  out: i => ({
    opacity: [1, 0],
    transition: {
      delay: i * 0.1,
      duration: .2
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
      delay: i * 0.1,
      duration: .2
    }
  }),
}

export const rootTransition = {
  landing: landingPage,
  about: aboutPage,
  blog: blogPage,
}