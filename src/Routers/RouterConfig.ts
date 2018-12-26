import Login from "../pages/login/index";
import Index from "../pages/index/index"
import UserList from "../pages/userList/index"

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
  },
  {
    path: "/userList",
    component: UserList
  }
];

export default routeConfig;
