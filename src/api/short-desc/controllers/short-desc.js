"use strict";

/**
 * short-desc controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::short-desc.short-desc",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::short-desc.short-desc")
        .findOne({
          where: { slug },
          populate: {
            ShortDesc: {
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
