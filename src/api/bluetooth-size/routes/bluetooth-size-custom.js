module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bluetooth-sizes/:slug",
      handler: "bluetooth-size.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
