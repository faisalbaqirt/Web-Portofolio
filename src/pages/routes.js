import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";


const routes = [
  {
    path: "/home",
    name: "Home",
    component: <Home />,
    layout: "/faisal-baqir",
  },
  {
    path: "/about",
    name: "About",
    component: <About />,
    layout: "/faisal-baqir",
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: <Portfolio />,
    layout: "/faisal-baqir",
  },
  {
    path: "/contact",
    name: "Contact",
    component: <Contact />,
    layout: "/faisal-baqir",
  }
];
export default routes;