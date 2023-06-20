"use strict";

/**
 * keybord controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::keybord.keybord", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::keybord.keybord").findOne({
      where: { slug },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
}));
