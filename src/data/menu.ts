export interface menu {
  icon: string,
  label: string,
  key: string,
  path: string
}

export interface subMenu {
  icon: string,
  label: string,
  key: string,
  path: string
  subMenu?: Array<menu>
}

export interface menu_list {
  icon: string,
  label: string,
  key: string,
  path: string
  subMenu?: Array<subMenu>
}

export const MENU_LIST: Array<menu_list> = [
  {
    icon: "user",
    label: "test1",
    key: "menu_1",
    path: '/index'
  },
  {
    icon: "video-camera",
    label: "test2",
    key: "menu_2",
    path: '/index'
  },
  {
    icon: "upload",
    label: "test3",
    key: "menu_3",
    path: '/index'
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
        path: '/index',
        subMenu: [
          {
            icon: "upload",
            label: "test5",
            key: "menu_8",
            path: '/index'
          },
          {
            icon: "user",
            label: "test6",
            key: "menu_9",
            path: '/index'
          }
        ]
      },
      {
        icon: "user",
        label: "test4",
        key: "menu_7",
        path: '/index'
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
