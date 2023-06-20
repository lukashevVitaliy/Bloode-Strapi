module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/mouses/:slug",
      handler: "mouse.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
