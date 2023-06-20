module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bg-accessories/:slug",
      handler: "bg-accessory.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
