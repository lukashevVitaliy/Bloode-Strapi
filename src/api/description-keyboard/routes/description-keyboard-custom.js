module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/description-keyboards/:slug",
      handler: "description-keyboard.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
