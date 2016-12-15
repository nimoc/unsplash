# unsplash

> Beautiful photo javaScript generator https://unsplash.it/

[![Build Status](https://api.travis-ci.org/nimojs/unsplash.svg)](https://travis-ci.org/nimojs/unsplash) [![NPM version](https://img.shields.io/npm/v/unsplash.svg?style=flat)](https://npmjs.org/package/unsplash) [![NPM downloads](http://img.shields.io/npm/dm/unsplash.svg?style=flat)](https://npmjs.org/package/unsplash)

https://unsplash.it/ JavaScript generator

## install

### npm

```shell
npm i unsplash --save
// var uh = require('unsplash')
```
### Script tag

```html
<script src="https://unpkg.com/unsplash@latest/uh.js" ></script>
```

## API

```js
uh(200)
// https://unsplash.it/200
```

![https://unsplash.it/200](https://unsplash.it/200)

```js
uh(200,300)
// https://unsplash.it/200/300
```
![https://unsplash.it/200/300](https://unsplash.it/200/300)

```js

uh(200,300,'random')
uh(200,300,'r')
// https://unsplash.it/200/300/?random
```

![https://unsplash.it/200/300/?random](https://unsplash.it/200/300/?random)

```js
uh('g', 200,300)
// https://unsplash.it/g/200/300
```

![https://unsplash.it/g/200/300](https://unsplash.it/g/200/300)

```js
uh(200,300,'image=1083')
// https://unsplash.it/200/300?image=1083
```

![https://unsplash.it/200/300?image=1083](https://unsplash.it/200/300?image=1083)


```js
uh(200,300,'blur')
// https://unsplash.it/200/300?blur
```

![https://unsplash.it/200/300?image=1083](https://unsplash.it/200/300?blur)


```js
uh(200,300,'gravity=east')
// https://unsplash.it/200/300?gravity=east
```
![https://unsplash.it/200/300?gravity=east](https://unsplash.it/200/300?gravity=east)
