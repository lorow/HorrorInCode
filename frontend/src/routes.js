import LandingPage from './pages/landingPage';
import AboutMe from './pages/aboutMe';
import Blog from './pages/blog';
import blogPost from './pages/blogPost.jsx';
import WorkDetail from './pages/workDetail';

export const routes = [
  { path: '/', Component: LandingPage, name: "Works", visibleInNav: true },
  { path: '/about', Component: AboutMe, name: "About", visibleInNav: true },
  { path: '/blog', Component: Blog, name: "Blog", visibleInNav: true },
  { path: '/blog/:articleId/', Component: blogPost, name: "post", visibleInNav: false },
  { path: '/project/:projectId/', Component: WorkDetail, name: "project", visibleInNav: false },

]