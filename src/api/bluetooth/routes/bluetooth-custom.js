module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bluetooths/:slug",
      handler: "bluetooth.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
