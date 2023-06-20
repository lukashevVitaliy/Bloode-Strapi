module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/info-accessories/:slug",
      handler: "info-accessory.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
