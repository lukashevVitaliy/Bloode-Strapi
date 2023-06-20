"use strict";

/**
 * keyboard-short-desc controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::keyboard-short-desc.keyboard-short-desc",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::keyboard-short-desc.keyboard-short-desc")
        .findOne({
          where: { slug },
          populate: {
            ShortDescKeyboad: {
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
