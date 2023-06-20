"use strict";

/**
 * keyboard-color controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::keyboard-color.keyboard-color",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::keyboard-color.keyboard-color")
        .findOne({
          where: { slug },
          populate: {
            ColorsSchemeKeyboard: {
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
