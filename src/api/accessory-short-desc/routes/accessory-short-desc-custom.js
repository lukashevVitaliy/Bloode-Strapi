module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/accessory-short-descs/:slug",
      handler: "accessory-short-desc.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
