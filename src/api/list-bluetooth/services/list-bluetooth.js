'use strict';

/**
 * list-bluetooth service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-bluetooth.list-bluetooth');
