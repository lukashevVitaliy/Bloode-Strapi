'use strict';

/**
 * support-request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::support-request.support-request');
