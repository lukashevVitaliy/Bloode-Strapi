module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/info-bluetooths/:slug",
      handler: "info-bluetooth.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
