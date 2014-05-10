# transformer.base64

[Transformer](http://github.com/jbenet/transformer) type: base64 encoded data in ascii

This module is a transformer type, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Commandline

```
> echo 'beep boop' | transform ascii base64
YmVlcCBib29w

> echo 'YmVlcCBib29w' | transform base64 ascii
beep boop
```

### Javascript

```js
var transformer = require('dat-transformer');
var ascii2base64 = transformer('ascii', 'base64');
ascii2base64('beep boop'); // YmVlcCBib29w
```
