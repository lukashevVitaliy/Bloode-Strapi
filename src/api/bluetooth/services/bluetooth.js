'use strict';

/**
 * bluetooth service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bluetooth.bluetooth');
