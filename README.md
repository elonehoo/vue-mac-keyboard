# vue-mac-keyboard

*Macbook computer keyboard style for vue component.*

## install

```bash
# npm
npm i @elonehoo/vue-mac-keyboard
# yarn
yarn add @elonehoo/vue-mac-keyboard
# pnpm
pnpm i @elonehoo/vue-mac-keyboard
```

## quick start

```vue
<script setup lang="ts">
import macKeyboard, { KeyCodeData } from '@elonehoo/vue-mac-keyboard'

const keycode: number[] = $ref([])

function macMousedown(el: HTMLLIElement, item: KeyCodeData) {
  if (item.keycode > -1)
    keycode.push(item.keycode)
}

function macMouseup(el: HTMLLIElement, item: KeyCodeData) {
  keycode.splice(0, keycode.length)
}
</script>

<template>
  <div style="margin-top:10px">
    <macKeyboard :key-code="keycode" @mac-mousedown="macMousedown" @mac-mouseup="macMouseup" />
  </div>
</template>

```

## api
### props

| prop | type | default | description |
|:----:|:----:|:-------:|:-----------:|
| key-code | number[] | [] | keycode |

### events

| event | type | description |
|:----:|:----:|:-----------:|
| mac-mousedown | function(el:HTMLLIElement,item:KeyCodeData) | mousedown function |
| mac-mouseup | function(el:HTMLLIElement,item:KeyCodeData) | mouseup function |

### type

```typescript
interface KeyCodeData {
  keycode: number
  name: string[]
}
```

## license

[MIT](./LICENSE) © [Elone Hoo](https://github.com/elonehoo)