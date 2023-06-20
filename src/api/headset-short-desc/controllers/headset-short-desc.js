"use strict";

/**
 * headset-short-desc controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::headset-short-desc.headset-short-desc",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::headset-short-desc.headset-short-desc")
        .findOne({
          where: { slug },
          populate: {
            HeadsetShortDesc: {
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
