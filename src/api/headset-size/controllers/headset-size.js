"use strict";

/**
 * headset-size controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::headset-size.headset-size",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::headset-size.headset-size")
        .findOne({
          where: { slug },
          populate: {
            image1: {
              populate: ["*"],
            },
            image2: {
              populate: ["*"],
            },
          },
        });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
