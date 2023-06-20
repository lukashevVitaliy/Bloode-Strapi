module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/keybords/:slug",
      handler: "keybord.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
