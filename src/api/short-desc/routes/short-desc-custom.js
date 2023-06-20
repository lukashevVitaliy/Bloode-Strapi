module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/short-descs/:slug",
      handler: "short-desc.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
