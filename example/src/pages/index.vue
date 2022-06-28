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
