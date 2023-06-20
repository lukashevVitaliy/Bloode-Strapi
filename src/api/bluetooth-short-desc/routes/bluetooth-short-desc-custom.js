module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bluetooth-short-descs/:slug",
      handler: "bluetooth-short-desc.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
