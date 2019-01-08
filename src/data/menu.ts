export interface Menu {
  icon: string,
  label: string,
  key: string,
  path: string
}

export interface SubMenu {
  icon: string,
  label: string,
  key: string,
  path: string
  subMenu?: Array<Menu>
}

export interface Menu_list {
  icon: string,
  label: string,
  key: string,
  path: string
  subMenu?: Array<SubMenu>
}

export const MENU_LIST: Array<Menu_list> = [
  {
    icon: "user",
    label: "test1",
    key: "index",
    path: '/index'
  },
  {
    icon: "video-camera",
    label: "test2",
    key: "userList",
    path: '/userList',
  },
  {
    icon: "upload",
    label: "员工管理",
    key: "personnel",
    path: '/staff',
    subMenu: [
      {
        icon: "upload",
        label: "员工列表",
        key: "management",
        path: '/personnel/management',
      },
      {
        icon: "user",
        label: "员工提成明细",
        key: "commission",
        path: '/personnel/commission'
      },
      {
        icon: "user",
        label: "员工业绩明细",
        key: "results",
        path: '/personnel/results'
      }
    ]
  },
  {
    icon: "user",
    label: "test4C",
    key: "menu_5",
    path: '/index',
    subMenu: [
      {
        icon: "upload",
        label: "test3",
        key: "menu_6",
        path: '/inde',
      },
      {
        icon: "user",
        label: "test4",
        key: "menu_7",
        path: '/ind'
      }
    ]
  },
  {
    icon: "user",
    label: "test4",
    key: "menu_4",
    path: '/index'
  },
];
