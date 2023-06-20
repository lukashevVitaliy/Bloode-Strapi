"use strict";

/**
 * description-accessory controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::description-accessory.description-accessory",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::description-accessory.description-accessory")
        .findOne({
          where: { slug },
          populate: {
            accessoryDescription: {
              populate: {
                title: {
                  populate: ["*"],
                },
                text: {
                  populate: ["*"],
                },
                logo: {
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
