module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/description-accessories/:slug",
      handler: "description-accessory.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
