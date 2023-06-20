"use strict";

/**
 * description-headset controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::description-headset.description-headset",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::description-headset.description-headset")
        .findOne({
          where: { slug },
          populate: {
            DescriptionHeadset: {
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
