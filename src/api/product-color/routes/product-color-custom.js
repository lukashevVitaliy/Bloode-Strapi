module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/product-colors/:slug",
      handler: "product-color.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
