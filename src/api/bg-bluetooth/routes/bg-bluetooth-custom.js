module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bg-bluetooths/:slug",
      handler: "bg-bluetooth.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
