import LandingPage from './pages/landingPage';
import AboutMe from './pages/aboutMe';

export const routes = [
  { path: '/', Component: LandingPage, name: "Works" },
  { path: '/about', Component: AboutMe, name: "About" }
]