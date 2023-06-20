module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/info-keybords/:slug",
      handler: "info-keybord.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
