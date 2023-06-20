'use strict';

/**
 * list-mouse service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-mouse.list-mouse');
