export type menu = {
  icon: string,
  label: string,
  key: string,
}

export type subMenu = {
  icon: string,
  label: string,
  key: string,
  subMenu?: Array<menu>
}

export type menu_list = {
  icon: string,
  label: string,
  key: string,
  subMenu?: Array<subMenu>
}

export const MENU_LIST: Array<menu_list> = [
  {
    icon: "user",
    label: "test1",
    key: "menu_1"
  },
  {
    icon: "video-camera",
    label: "test2",
    key: "menu_2"
  },
  {
    icon: "upload",
    label: "test3",
    key: "menu_3"
  },
  {
    icon: "user",
    label: "test4C",
    key: "menu_5",
    subMenu: [
      {
        icon: "upload",
        label: "test3",
        key: "menu_6",
        subMenu: [
          {
            icon: "upload",
            label: "test5",
            key: "menu_8"
          },
          {
            icon: "user",
            label: "test6",
            key: "menu_9"
          }
        ]
      },
      {
        icon: "user",
        label: "test4",
        key: "menu_7"
      }
    ]
  },
  {
    icon: "user",
    label: "test4",
    key: "menu_4"
  },
];
