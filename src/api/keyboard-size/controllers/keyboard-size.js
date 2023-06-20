"use strict";

/**
 * keyboard-size controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::keyboard-size.keyboard-size",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::keyboard-size.keyboard-size")
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
