module.exports = {
  dest: "docs",
  title: "tutorial-github",
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
    sidebar: ["/", "/01-git/", "/02-github/"],
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
