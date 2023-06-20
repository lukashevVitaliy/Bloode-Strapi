module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bluetooth-colors/:slug",
      handler: "bluetooth-color.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
