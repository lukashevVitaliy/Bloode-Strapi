"use strict";

/**
 * bg-keyboard controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::bg-keyboard.bg-keyboard",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::bg-keyboard.bg-keyboard")
        .findOne({
          where: { slug },
          populate: {
            bg_content_1: {
              populate: ["*"],
            },
            bg_content_2: {
              populate: ["*"],
            },
            bg_content_3: {
              populate: ["*"],
            },
          },
        });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
