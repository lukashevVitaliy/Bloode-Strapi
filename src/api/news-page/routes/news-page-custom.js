module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/news-pages/:slug",
      handler: "news-page.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
