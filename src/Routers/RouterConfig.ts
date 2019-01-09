import Login from "../pages/login/index";
import Index from "../pages/index/index"
import UserList from "../pages/userList/index"
import Test from '../pages/test/index'
import Commision from "../pages/personnel/commision"
import Management from "../pages/personnel/management"
import Results from "../pages/personnel/performance"

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
  },
  {
    path: "/personnel/commission",
    component: Commision
  },
  {
    path: "/personnel/management",
    component: Management
  },
  {
    path: "/personnel/results",
    component: Results
  }
];

export default routeConfig;
