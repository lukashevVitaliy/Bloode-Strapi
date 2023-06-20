module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/descriptions/:slug",
      handler: "description.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
