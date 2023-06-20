module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/description-headsets/:slug",
      handler: "description-headset.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
