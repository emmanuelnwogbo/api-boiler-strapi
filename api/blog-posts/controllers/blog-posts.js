"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const finder = require("strapi-utils/lib/finder");

module.exports = {
  async find(ctx) {
    console.log(ctx.response);
    const entity = await strapi.services["blog-posts"].find();
    return {
      name: entity[0].title,
    };
  },
};
