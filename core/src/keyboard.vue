<script setup lang="ts">
import { ref } from 'vue'
import type { KeyCodeData } from './type'

const keyCodeData: KeyCodeData[] = [
  { keycode: 27, name: ['esc'] },
  { keycode: 112, name: ['F1'] },
  { keycode: 113, name: ['F2'] },
  { keycode: 114, name: ['F3'] },
  { keycode: 115, name: ['F4'] },
  { keycode: 116, name: ['F5'] },
  { keycode: 117, name: ['F6'] },
  { keycode: 118, name: ['F7'] },
  { keycode: 119, name: ['F8'] },
  { keycode: 120, name: ['F9'] },
  { keycode: 121, name: ['F10'] },
  { keycode: 122, name: ['F11'] },
  { keycode: 123, name: ['F12'] },
  { keycode: -1, name: ['〇'] },
  { keycode: 192, name: ['~', '`'] },
  { keycode: 49, name: ['!', '1'] },
  { keycode: 50, name: ['@', '2'] },
  { keycode: 51, name: ['#', '3'] },
  { keycode: 52, name: ['$', '4'] },
  { keycode: 53, name: ['%', '5'] },
  { keycode: 54, name: ['^', '6'] },
  { keycode: 55, name: ['&', '7'] },
  { keycode: 56, name: ['*', '8'] },
  { keycode: 57, name: ['(', '9'] },
  { keycode: 48, name: [')', '0'] },
  { keycode: 189, name: ['＿', '-'] },
  { keycode: 187, name: ['＋', ': '] },
  { keycode: 8, name: ['delete'] },
  { keycode: 9, name: ['tab'] },
  { keycode: 81, name: ['Q'] },
  { keycode: 87, name: ['W'] },
  { keycode: 69, name: ['E'] },
  { keycode: 82, name: ['R'] },
  { keycode: 84, name: ['T'] },
  { keycode: 89, name: ['Y'] },
  { keycode: 85, name: ['U'] },
  { keycode: 73, name: ['I'] },
  { keycode: 79, name: ['O'] },
  { keycode: 80, name: ['P'] },
  { keycode: 219, name: ['{', '['] },
  { keycode: 221, name: ['}', ']'] },
  { keycode: 220, name: ['|', '\\'] },
  { keycode: 20, name: ['', 'CapsLock'] },
  { keycode: 65, name: ['A'] },
  { keycode: 83, name: ['S'] },
  { keycode: 68, name: ['D'] },
  { keycode: 70, name: ['F'] },
  { keycode: 71, name: ['G'] },
  { keycode: 72, name: ['H'] },
  { keycode: 74, name: ['J'] },
  { keycode: 75, name: ['K'] },
  { keycode: 76, name: ['L'] },
  { keycode: 186, name: [':', ';'] },
  { keycode: 222, name: ['"', '\''] },
  { keycode: 13, name: ['enter', 'return'] },
  { keycode: 16, name: ['⇧'] },
  { keycode: 90, name: ['Z'] },
  { keycode: 88, name: ['X'] },
  { keycode: 67, name: ['C'] },
  { keycode: 86, name: ['V'] },
  { keycode: 66, name: ['B'] },
  { keycode: 78, name: ['N'] },
  { keycode: 77, name: ['M'] },
  { keycode: 188, name: ['<', ','] },
  { keycode: 190, name: ['>', '.'] },
  { keycode: 191, name: ['?', '/'] },
  { keycode: 16, name: ['⇧'] },
  { keycode: -1, name: ['fn'] },
  { keycode: 17, name: ['control'] },
  { keycode: 18, name: ['alt', 'option'] },
  { keycode: 91, name: ['command'] },
  { keycode: 32, name: [''] },
  { keycode: 91, name: ['command'] },
  { keycode: 18, name: ['alt', 'option'] },
  { keycode: 37, name: ['◀'] },
  { keycode: 38, name: ['▲'] },
  { keycode: 39, name: ['▶'] },
  { keycode: 40, name: ['▼'] },
]

interface Props {
  keyCode: number[]
}

const props = defineProps<Props>()

const emit = defineEmits(['mac-mousedown', 'mac-mouseup'])

function pressed(keycode: number): boolean {
  return props.keyCode.includes(keycode)
}

const element = ref([])

function mousedown(el: HTMLLIElement, item: KeyCodeData) {
  emit('mac-mousedown', el, item)
}

function mouseup(el: HTMLLIElement, item: KeyCodeData) {
  emit('mac-mouseup', el, item)
}
</script>

<template>
  <div class="w-mac-keyboard">
    <ul>
      <li
        v-for="(item,index) in keyCodeData"
        :key="index"
        ref="element"
        :class="{pressed:pressed(item.keycode)}"
        :data-key="item.keycode"
        @mousedown="mousedown(element[index],item)"
        @mouseup="mouseup(element[index],item)"
      >
        <span v-for="(_name,_index) in item.name" :key="_index">{{ _name }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
.w-mac-keyboard{
  height:394px;
  border-radius:10px;
  border:1px solid #C9C9C9;
  background:#F2F2F2;
  box-shadow:2px 0 2px #e2e2e2 inset,-2px 2px 3px #e2e2e2 inset,1px 0 #c1c1c1 inset,0 -2px 3px #c1c1c1 inset;
  user-select:none;position:relative;
  width:995px;margin:0 auto
}
.w-mac-keyboard ul{
  width:992px;
  margin-top:9px;
  padding-left:11px;
  position:relative;
  float:left
}
.w-mac-keyboard li{
  width:62px;
  height:62px;
  float:left;
  list-style:none;
  margin-right:5px;
  margin-bottom:5px;
  background:#151515;
  color:#c8c8c8;
  text-align:center;
  line-height:62px;
  font-size:12px;
  border-radius:8px;
  border:1px solid #3A3A3A;
  box-shadow:1px 0 #000,0 1px #000,-1px 0 #000,0 -1px #000;
  box-sizing:initial;
  transition:all .4s ease-in;
  user-select:none;
  cursor:pointer;
  position:relative
}
.w-mac-keyboard li:active,.w-mac-keyboard li.pressed{
  color:#52f800;
  background-color:#100068;
  border:1px solid #332376;
  transition:1ms linear
}
.w-mac-keyboard li:nth-child(1){
  width:99px;
  height:28px;
  line-height:28px;
  text-indent:1em;
  text-align:left
}
.w-mac-keyboard li:nth-child(2),
.w-mac-keyboard li:nth-child(3),
.w-mac-keyboard li:nth-child(4),
.w-mac-keyboard li:nth-child(5),
.w-mac-keyboard li:nth-child(6),
.w-mac-keyboard li:nth-child(7),
.w-mac-keyboard li:nth-child(8),
.w-mac-keyboard li:nth-child(9),
.w-mac-keyboard li:nth-child(10),
.w-mac-keyboard li:nth-child(11),
.w-mac-keyboard li:nth-child(12),
.w-mac-keyboard li:nth-child(13),
.w-mac-keyboard li:nth-child(14){
  width:60px;
  height:28px;
  line-height:28px
}
.w-mac-keyboard li:nth-child(15),
.w-mac-keyboard li:nth-child(16),
.w-mac-keyboard li:nth-child(17),
.w-mac-keyboard li:nth-child(18),
.w-mac-keyboard li:nth-child(19),
.w-mac-keyboard li:nth-child(20),
.w-mac-keyboard li:nth-child(21),
.w-mac-keyboard li:nth-child(22),
.w-mac-keyboard li:nth-child(23),
.w-mac-keyboard li:nth-child(24),
.w-mac-keyboard li:nth-child(25),
.w-mac-keyboard li:nth-child(26),
.w-mac-keyboard li:nth-child(27),
.w-mac-keyboard li:nth-child(40),
.w-mac-keyboard li:nth-child(41),
.w-mac-keyboard li:nth-child(42),
.w-mac-keyboard li:nth-child(53),
.w-mac-keyboard li:nth-child(54),
.w-mac-keyboard li:nth-child(64),
.w-mac-keyboard li:nth-child(65),
.w-mac-keyboard li:nth-child(66){
  padding:7px 0;
  height:48px
}
.w-mac-keyboard li:nth-child(15) span,
.w-mac-keyboard li:nth-child(16) span,
.w-mac-keyboard li:nth-child(17) span,
.w-mac-keyboard li:nth-child(18) span,
.w-mac-keyboard li:nth-child(19) span,
.w-mac-keyboard li:nth-child(20) span,
.w-mac-keyboard li:nth-child(21) span,
.w-mac-keyboard li:nth-child(22) span,
.w-mac-keyboard li:nth-child(23) span,
.w-mac-keyboard li:nth-child(24) span,
.w-mac-keyboard li:nth-child(25) span,
.w-mac-keyboard li:nth-child(26) span,
.w-mac-keyboard li:nth-child(27) span,
.w-mac-keyboard li:nth-child(40) span,
.w-mac-keyboard li:nth-child(41) span,
.w-mac-keyboard li:nth-child(42) span,
.w-mac-keyboard li:nth-child(53) span,
.w-mac-keyboard li:nth-child(54) span,
.w-mac-keyboard li:nth-child(64) span,
.w-mac-keyboard li:nth-child(65) span,
.w-mac-keyboard li:nth-child(66) span{
  line-height:23px;
  height:23px;
  width:100%;
  float:left;
  font-size:14px
}
.w-mac-keyboard li:nth-child(28) span,
.w-mac-keyboard li:nth-child(55) span,
.w-mac-keyboard li:nth-child(67) span{
  line-height:14px;
  margin-top:43px;
  float:right;
  margin-right:8px
}
.w-mac-keyboard li:nth-child(30),
.w-mac-keyboard li:nth-child(31),
.w-mac-keyboard li:nth-child(32),
.w-mac-keyboard li:nth-child(33),
.w-mac-keyboard li:nth-child(34),
.w-mac-keyboard li:nth-child(35),
.w-mac-keyboard li:nth-child(36),
.w-mac-keyboard li:nth-child(37),
.w-mac-keyboard li:nth-child(38),
.w-mac-keyboard li:nth-child(39),
.w-mac-keyboard li:nth-child(44),
.w-mac-keyboard li:nth-child(45),
.w-mac-keyboard li:nth-child(46),
.w-mac-keyboard li:nth-child(47),
.w-mac-keyboard li:nth-child(48),
.w-mac-keyboard li:nth-child(49),
.w-mac-keyboard li:nth-child(50),
.w-mac-keyboard li:nth-child(51),
.w-mac-keyboard li:nth-child(52),
.w-mac-keyboard li:nth-child(57),
.w-mac-keyboard li:nth-child(58),
.w-mac-keyboard li:nth-child(59),
.w-mac-keyboard li:nth-child(60),
.w-mac-keyboard li:nth-child(61),
.w-mac-keyboard li:nth-child(62),
.w-mac-keyboard li:nth-child(63){
  font-size:18px;
  line-height:64px
}
.w-mac-keyboard li:nth-child(29) span,
.w-mac-keyboard li:nth-child(43) span,
.w-mac-keyboard li:nth-child(56) span,
.w-mac-keyboard li:nth-child(68) span,
.w-mac-keyboard li:nth-child(69) span,
.w-mac-keyboard li:nth-child(70) span,
.w-mac-keyboard li:nth-child(71) span,
.w-mac-keyboard li:nth-child(73) span,
.w-mac-keyboard li:nth-child(74) span{
  line-height:14px;
  margin-top:43px;
  text-indent:5px;
  float:left
}
.w-mac-keyboard li:nth-child(28),
.w-mac-keyboard li:nth-child(29){
  width:73px
}
.w-mac-keyboard li:nth-child(43),
.w-mac-keyboard li:nth-child(55){
  width:102px
}
.w-mac-keyboard li:nth-child(43):active span:first-child{
  background:#52f800
}
.w-mac-keyboard li:nth-child(43) span:first-child{
  position:absolute;
  top:-36px;
  left:5px;
  width:6px;
  height:6px;
  background:#fff;
  border-radius:3px
}
.w-mac-keyboard li:nth-child(55) span:first-child,
.w-mac-keyboard li:nth-child(70) span:first-child{
  position:absolute;
  right:0px;
  top:-37px;
  font-size:12px;
  line-height:12px
}
.w-mac-keyboard li:nth-child(70) span:first-child{
  left:0px;
  text-align:left
}
.w-mac-keyboard li:nth-child(74) span:first-child{
  position:absolute;
  left:0;
  top:-37px;
  font-size:12px;
  line-height:12px
}
.w-mac-keyboard li:nth-child(56){
  width:136px
}
.w-mac-keyboard li:nth-child(67){
  width:137px
}
.w-mac-keyboard li:nth-child(71),
.w-mac-keyboard li:nth-child(73){
  width:70px
}
.w-mac-keyboard li:nth-child(72){
  width:333px
}
.w-mac-keyboard li:nth-child(76),
.w-mac-keyboard li:nth-child(78){
  height:29px;
  line-height:29px
}
.w-mac-keyboard li:nth-child(76){
  border-bottom-left-radius:0;
  border-bottom-right-radius:0
}
.w-mac-keyboard li:nth-child(78){
  border-top-left-radius:0;
  border-top-right-radius:0;
  position:absolute;
  bottom:0;
  right:84px
}
</style>
