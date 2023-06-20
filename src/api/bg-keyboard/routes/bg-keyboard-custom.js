module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bg-keyboards/:slug",
      handler: "bg-keyboard.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
