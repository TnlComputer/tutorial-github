module.exports = {
  dest: "docs",
  base: "/tutorial-github",
  title: "Tnl Computer",
  description: "Documentacion de ayuda",

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    editLinks: false,
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guia",
        link: "/",
      },
      {
        text: "TNL",
        link: "https://tnlcomputer.com.ar",
      },
    ],
    sidebar: [
      "/",
      "/01-html/",
      "/02-html-intermedio/",
      "/03-css/",
      "/04-css-intermedio/",
      "/05-flexbox/",
      "/06-flexbox-practica/",
      "/07-grid-css/",
      "/08-formularios/",
      "/09-git/",
      "/10-github/",
    ],
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
