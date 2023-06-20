module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/keyboard-colors/:slug",
      handler: "keyboard-color.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
