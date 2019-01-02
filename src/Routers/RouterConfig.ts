import Login from "../pages/login/index";
import Index from "../pages/index/index"
import UserList from "../pages/userList/index"
import Test from '../pages/test/index'

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
  },
  {
    path: "/test",
    component: Test
  }
];

export default routeConfig;
