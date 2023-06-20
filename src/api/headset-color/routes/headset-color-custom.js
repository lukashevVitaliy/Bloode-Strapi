module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/headset-colors/:slug",
      handler: "headset-color.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
