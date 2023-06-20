"use strict";

/**
 * news-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::news-page.news-page",

  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db.query("api::news-page.news-page").findOne({
        where: { slug },
        populate: {
          image: {
            populate: {
              populate: ["*"],
            },
          },
          info: {
            populate: {
              populate: ["*"],
            },
          },
        },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
