module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/accessory-sizes/:slug",
      handler: "accessory-size.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
