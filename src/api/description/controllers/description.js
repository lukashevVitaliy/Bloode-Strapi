"use strict";

/**
 * description controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::description.description",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::description.description")
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
