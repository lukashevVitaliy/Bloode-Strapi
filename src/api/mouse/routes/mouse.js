'use strict';

/**
 * mouse router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::mouse.mouse');
