"use strict";

/**
 * accessory-short-desc controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::accessory-short-desc.accessory-short-desc",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::accessory-short-desc.accessory-short-desc")
        .findOne({
          where: { slug },
          populate: {
            accessoryShortDesc: {
              populate: {
                title: {
                  populate: {
                    populate: ["*"],
                  },
                },
                logo: {
                  populate: {
                    populate: ["*"],
                  },
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
