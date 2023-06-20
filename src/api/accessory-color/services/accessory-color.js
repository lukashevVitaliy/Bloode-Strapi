'use strict';

/**
 * accessory-color service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::accessory-color.accessory-color');
