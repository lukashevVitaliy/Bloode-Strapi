module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/accessories/:slug",
      handler: "accessory.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
