'use strict';

/**
 * support-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::support-request.support-request');
