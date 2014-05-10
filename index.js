var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'base64',
  'description': 'base64 encoded data in ascii',
  'schema': "string"
});
