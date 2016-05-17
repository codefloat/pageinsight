/**
 * Photos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {type: 'integer', primaryKey:true, autoIncrement:true},

    image_id: {type: 'string', unique: true},

    page_name: {type: 'string'},

    page_size: {type: 'string'},

    page_id: {type: 'string'},

    preview : { type: 'string' },

    likes : { type: 'integer' },

    year : { type: 'string' },

    likes_percentage : { type: 'float' },

    url : { type: 'string' },

    project: {
      model: 'projects',
    }
  }
};
