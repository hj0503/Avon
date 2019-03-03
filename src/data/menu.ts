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
    path: '/personnel',
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
    label: "卡项管理",
    key: "card",
    path: '/card',
    subMenu: [
      {
        icon: "upload",
        label: "卡项列表",
        key: "CardList",
        path: '/card/list',
      },
      {
        icon: "user",
        label: "已售卡项",
        key: "CardSold",
        path: '/card/sold'
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
