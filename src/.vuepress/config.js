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
    lastUpdated: true,
    nav: [
      {
        text: "Tutos",
        link: "/",
      },
      {
        text: "Tnl Computer",
        link: "https://tnlcomputer.com.ar",
      },
      {
        text: "Taxis Barzola",
        link: "https://taxisbarzola.com.ar",
      },
      {
        text: "Mapi Tienda",
        link: "https://mapitienda.es",
      },
      {
        text: "Soria Perfomance",
        link: "https://aldosoria.com.ar",
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
      "/07-00-terminal/",
      "/07-01-git/",
      "/07-02-github/",
      "/07-b-fundamentos/",
      "/08-b-componentes/",
      "/09-b-accordion/",
      "/10-b-scroll/",
      "/11-b-form/",
      "/12-b-sass/",
      "/14-b-range/",
      "/13-b-chat/",
      "/15-b-php/",
      "/16-b-parsel/",
      "/17-b-offcanvas/",
    ],
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
