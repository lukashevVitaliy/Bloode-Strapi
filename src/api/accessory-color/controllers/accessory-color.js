"use strict";

/**
 * accessory-color controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::accessory-color.accessory-color",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::accessory-color.accessory-color")
        .findOne({
          where: { slug },
          populate: {
            accessoryColorsScheme: {
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
