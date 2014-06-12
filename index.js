var Type = require('transformer-type');

module.exports = Type({
  // @context and type filled in automatically.
  'id': 'base64',
  'description': 'base64 encoded data in ascii',
  'schema': "string"
});
