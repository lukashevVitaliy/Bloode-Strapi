"use strict";

/**
 * mouse controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::mouse.mouse", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::mouse.mouse").findOne({
      where: { slug },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
}));
