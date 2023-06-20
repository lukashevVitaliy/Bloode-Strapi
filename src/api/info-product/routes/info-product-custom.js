module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/info-products/:slug",
      handler: "info-product.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
