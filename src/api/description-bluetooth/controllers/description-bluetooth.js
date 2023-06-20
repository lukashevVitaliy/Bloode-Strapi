"use strict";

/**
 * description-bluetooth controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::description-bluetooth.description-bluetooth",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::description-bluetooth.description-bluetooth")
        .findOne({
          where: { slug },
          populate: {
            DescriptionBluetooth: {
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
