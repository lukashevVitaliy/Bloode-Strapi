module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/product-sizes/:slug",
      handler: "product-size.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
