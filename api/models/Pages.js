/**
 * Pages.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  migrate: 'alter',
  attributes: {
    id: {type: 'integer', autoIncrement: true, primaryKey: true},
    name: {type: 'string'},
    page_id: {type: 'string'},
    username: {type: 'string'},
    fan_count: {type: 'string'},
    is_analyzed: {type: 'string'},
    results: {type: 'json'},
    project: {type: 'string'},
    last_cursor: {type: 'string'},
    photos_collected_count: {type: 'string'},

    project: {
      model: 'projects',
    }
  }
};
