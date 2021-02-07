export default {
  pages: ["pages/index/index", "pages/index2/index", "pages/detail/index"],
  tabBar: {
    list: [
      {
        iconPath: "img/b.png",
        selectedIconPath: "img/b.png",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "img/b.png",
        selectedIconPath: "img/b.png",
        pagePath: "pages/index2/index",
        text: "首页2",
      },
    ],
    color: "#666",
    selectedColor: "#FF8C00",
    borderStyle: "black",
    backgroundColor: "#ffffff",
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
