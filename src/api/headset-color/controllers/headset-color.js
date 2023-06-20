"use strict";

/**
 * headset-color controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::headset-color.headset-color",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::headset-color.headset-color")
        .findOne({
          where: { slug },
          populate: {
            HeadsetColorsScheme: {
              populate: {
                images: {
                  populate: ["*"],
                },
              },
            },
          },
        });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
