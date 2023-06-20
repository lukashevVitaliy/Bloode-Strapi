module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bg-headsets/:slug",
      handler: "bg-headset.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
