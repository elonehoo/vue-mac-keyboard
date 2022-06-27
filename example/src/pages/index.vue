<script setup lang="ts">
import {keyboard} from '@elonehoo/vue-mac-keyboard'

const keycode: number[] = $ref([])

function macMousedown(el: any, item: any) {
  if (item.keycode > -1)
    keycode.push(item.keycode)
}

function macMouseup(el: any, item: any) {
  keycode.splice(0, keycode.length)
}
</script>

<template>
  <div style="margin-top:10px">
    <keyboard :key-code="keycode" @mac-mousedown="macMousedown" @mac-mouseup="macMouseup" />
  </div>
</template>
