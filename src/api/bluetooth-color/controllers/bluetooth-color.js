"use strict";

/**
 * bluetooth-color controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::bluetooth-color.bluetooth-color",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::bluetooth-color.bluetooth-color")
        .findOne({
          where: { slug },
          populate: {
            BluetoothColorsScheme: {
              populate: {
                images: {
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
