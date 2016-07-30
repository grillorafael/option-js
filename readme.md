# OptionJS [![Build Status](https://travis-ci.org/grillorafael/option-js.svg?branch=master)](https://travis-ci.org/grillorafael/option-js)
This project is a Naive representation of Scala's `Option[T]`

`npm install option-save --save`

## Examples
```javascript
const Option = require('option-js');
const DefaultValue = 50;

const value = Option.of(10);
const valueNull = Option.of(null);

console.log(value.getOrElse(DefaultValue)); // 10
console.log(valueNull.getOrElse(DefaultValue)); // 50

function user(name) {
    return {
        username: 'username', //Required
        name: Option.of(name)
    };
}

const withName = user("John");
const withoutName = user();
console.log(withName.name.getOrElse('Anonymous')); // John
console.log(withoutName.name.getOrElse('Anonymous')); // Anonymous
```

## MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.