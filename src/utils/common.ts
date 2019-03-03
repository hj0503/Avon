//TODO  感觉写的很low
export function findSelectMenu(menu_list: any, pathname) {
  let key, subKey;
  for(let i = 0; i< menu_list.length; i++) {
    if(menu_list[i].path === pathname) {
      key = menu_list[i].key
      break;
    }
    if(menu_list[i].subMenu) {
      for(let j = 0; j< menu_list[i].subMenu.length; j++) {
        if(menu_list[i].subMenu[j].path === pathname) {
          subKey = menu_list[i].key
          key = menu_list[i].subMenu[j].key
          break;
        }
      }
    }
  }
  return [key, subKey]
}