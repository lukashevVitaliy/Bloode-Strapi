module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/headsets/:slug",
      handler: "headset.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
