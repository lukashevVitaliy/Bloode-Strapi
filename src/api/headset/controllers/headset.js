"use strict";

/**
 * headset controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::headset.headset", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::headset.headset").findOne({
      where: { slug },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
}));
