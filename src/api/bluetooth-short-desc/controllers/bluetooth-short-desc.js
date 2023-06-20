"use strict";

/**
 * bluetooth-short-desc controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::bluetooth-short-desc.bluetooth-short-desc",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::bluetooth-short-desc.bluetooth-short-desc")
        .findOne({
          where: { slug },
          populate: {
            BluetoothShortDesc: {
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
