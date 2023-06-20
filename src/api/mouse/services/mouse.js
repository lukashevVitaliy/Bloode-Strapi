'use strict';

/**
 * mouse service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mouse.mouse');
