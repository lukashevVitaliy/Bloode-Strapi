module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/description-bluetooths/:slug",
      handler: "description-bluetooth.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
