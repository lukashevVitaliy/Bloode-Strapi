module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/headset-short-descs/:slug",
      handler: "headset-short-desc.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
