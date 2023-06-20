"use strict";

/**
 * bg-headset controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::bg-headset.bg-headset",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::bg-headset.bg-headset")
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
