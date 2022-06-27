<script setup lang="ts">
import vueMacKeyboard from '@elonehoo/vue-mac-keyboard'
const keycode:number[] = $ref([])
</script>

<template>
<div style="margin-top:10px">
  <vueMacKeyboard :key-code="keycode"/>
</div>
</template>
