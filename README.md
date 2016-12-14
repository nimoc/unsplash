# unsplash

> **not yet released**

https://unsplash.it/ JavaScript generator

## install

### npm

```shell
npm i install unsplash
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
// https://unsplash.it/200/300/?random
```

![https://unsplash.it/200/300/?random](https://unsplash.it/200/300/?random)

```js
uh('g', 200,300)
// https://unsplash.it/g/200/300
```

![https://unsplash.it/g/200/300](https://unsplash.it/g/200/300)

```js
uh(200,300,1083)
// https://unsplash.it/200/300?image=1083
```

![https://unsplash.it/200/300?image=1083](https://unsplash.it/200/300?image=1083)

```js
uh(200,300,'gravity=east')
// https://unsplash.it/200/300?gravity=east
```
![https://unsplash.it/200/300?gravity=east](https://unsplash.it/200/300?gravity=east)
