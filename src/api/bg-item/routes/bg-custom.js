module.exports = {
  routes: [
    {
      method: "GET",
      // переопределяем маршрут идентификатора
      path: "/bg-items/:slug",
      handler: "bg-item.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
