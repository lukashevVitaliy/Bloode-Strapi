module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/info-headsets/:slug",
      handler: "info-headset.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
