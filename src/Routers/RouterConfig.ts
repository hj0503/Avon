import Login from "../pages/login/index";
import Index from "../pages/index/index"

const routeConfig = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/index",
    component: Index
  }
];

export default routeConfig;
