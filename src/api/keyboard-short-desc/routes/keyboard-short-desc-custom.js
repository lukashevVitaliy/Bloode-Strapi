module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/keyboard-short-descs/:slug",
      handler: "keyboard-short-desc.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
