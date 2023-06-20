module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/headset-sizes/:slug",
      handler: "headset-size.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
