module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/keyboard-sizes/:slug",
      handler: "keyboard-size.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
