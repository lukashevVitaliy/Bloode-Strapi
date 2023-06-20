module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/accessory-colors/:slug",
      handler: "accessory-color.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
