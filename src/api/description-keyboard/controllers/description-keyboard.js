"use strict";

/**
 * description-keyboard controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::description-keyboard.description-keyboard",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::description-keyboard.description-keyboard")
        .findOne({
          where: { slug },
          populate: {
            description: {
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
