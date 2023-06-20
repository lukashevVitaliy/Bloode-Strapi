"use strict";

/**
 * accessory-size controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::accessory-size.accessory-size",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::accessory-size.accessory-size")
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
