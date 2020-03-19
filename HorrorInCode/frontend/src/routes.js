import LandingPage from './pages/landingPage';
import AboutMe from './pages/aboutMe';
import Blog from './pages/blog';

export const routes = [
  { path: '/', Component: LandingPage, name: "Works" },
  { path: '/about', Component: AboutMe, name: "About" },
  { path: '/blog', Component: Blog, name: "Blog" }
]