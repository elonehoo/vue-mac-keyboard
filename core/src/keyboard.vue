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

<style lang="less" scoped>
@w-keyboard:~"w-mac-keyboard";

.@{w-keyboard} {
  height: 394px;
  border-radius: 10px;
  border: 1px solid #C9C9C9;
  background: #F2F2F2;
  box-shadow: 2px 0px 2px #E2E2E2 inset,-2px 2px 3px #E2E2E2 inset,1px -0px 0px #C1C1C1 inset,0px -2px 3px #C1C1C1 inset;
  user-select: none;
  position: relative;
  width: 995px;
  margin: 0 auto;
  ul {
    width: 992px;
    margin-top: 9px;
    padding-left: 11px;
    position: relative;
    float: left;
  }
  li {
    width: 62px;
    height: 62px;
    float: left;
    list-style: none;
    margin-right: 5px;
    margin-bottom: 5px;
    background: #151515;
    color: rgb(200,200,200);
    text-align: center;
    line-height: 62px;
    font-size: 12px;
    border-radius: 8px;
    border: 1px solid #3A3A3A;
    box-shadow: 1px 0px 0px rgb(0,0,0),0px 1px 0px rgb(0,0,0),-1px 0px 0px rgb(0,0,0),0px -1px 0px rgb(0,0,0);
    box-sizing: initial;
    transition: all .4s ease-in;
    user-select: none;
    cursor: pointer;
    position: relative;
    &:active, &.pressed{
      color:#52F800;
      background-color: #100068;
      border: 1px solid #332376;
      transition: 1ms linear;
    }
    &:nth-child(1) {
      width: 99px;
      height: 28px;
      line-height: 28px;
      text-indent: 1em;
      text-align: left;
    }
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11),
    &:nth-child(12),
    &:nth-child(13),
    &:nth-child(14) {
      width: 60px;
      height: 28px;
      line-height: 28px;
    }
    &:nth-child(15),
    &:nth-child(16),
    &:nth-child(17),
    &:nth-child(18),
    &:nth-child(19),
    &:nth-child(20),
    &:nth-child(21),
    &:nth-child(22),
    &:nth-child(23),
    &:nth-child(24),
    &:nth-child(25),
    &:nth-child(26),
    &:nth-child(27),
    &:nth-child(40),
    &:nth-child(41),
    &:nth-child(42),
    &:nth-child(53),
    &:nth-child(54),
    &:nth-child(64),
    &:nth-child(65),
    &:nth-child(66) {
      padding: 7px 0;
      height: 48px;
    }
  }
}

.@{w-keyboard} {
  li:nth-child(15) span,
  li:nth-child(16) span,
  li:nth-child(17) span,
  li:nth-child(18) span,
  li:nth-child(19) span,
  li:nth-child(20) span,
  li:nth-child(21) span,
  li:nth-child(22) span,
  li:nth-child(23) span,
  li:nth-child(24) span,
  li:nth-child(25) span,
  li:nth-child(26) span,
  li:nth-child(27) span,
  li:nth-child(40) span,
  li:nth-child(41) span,
  li:nth-child(42) span,
  li:nth-child(53) span,
  li:nth-child(54) span,
  li:nth-child(64) span,
  li:nth-child(65) span,
  li:nth-child(66) span {
    line-height: 23px;
    height: 23px;
    width: 100%;
    float: left;
    font-size:14px;
  }
  li:nth-child(28) span, li:nth-child(55) span, li:nth-child(67) span {
    line-height: 14px;
    margin-top: 43px;
    float: right;
    margin-right: 8px;
  }
  // 字母键
  li:nth-child(30),
  li:nth-child(31),
  li:nth-child(32),
  li:nth-child(33),
  li:nth-child(34),
  li:nth-child(35),
  li:nth-child(36),
  li:nth-child(37),
  li:nth-child(38),
  li:nth-child(39),
  li:nth-child(44),
  li:nth-child(45),
  li:nth-child(46),
  li:nth-child(47),
  li:nth-child(48),
  li:nth-child(49),
  li:nth-child(50),
  li:nth-child(51),
  li:nth-child(52),
  li:nth-child(57),
  li:nth-child(58),
  li:nth-child(59),
  li:nth-child(60),
  li:nth-child(61),
  li:nth-child(62),
  li:nth-child(63) {
    font-size: 18px;
    line-height: 64px;
  }
  li:nth-child(29) span,
  li:nth-child(43) span,
  li:nth-child(56) span,
  li:nth-child(68) span,
  li:nth-child(69) span,
  li:nth-child(70) span,
  li:nth-child(71) span,
  li:nth-child(73) span,
  li:nth-child(74) span {
    line-height: 14px;
    margin-top: 43px;
    text-indent: 5px;
    float: left;
  }
  li:nth-child(28),
  li:nth-child(29) {
    width: 73px;
  }
  li:nth-child(43),
  li:nth-child(55) {
    width: 102px;
  }
  li:nth-child(43) {
    &:active {
      span:first-child {
        background:#52f800;
      }
    }
    span:first-child {
      position: absolute;
      top: -36px;
      left: 5px;
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 3px;
    }
  }
  li:nth-child(55) span:first-child,
  li:nth-child(70) span:first-child {
    position: absolute;
    right: 0px;
    top: -37px;
    font-size: 12px;
    line-height: 12px;
  }
  li:nth-child(70) span:first-child {
    left: 0px;
    text-align: left;
  }
  li:nth-child(74) span:first-child {
    position: absolute;
    left: 0;
    top: -37px;
    font-size: 12px;
    line-height: 12px;
  }
  li:nth-child(56) {
    width: 136px;
  }
  li:nth-child(67) {
    width: 137px;
  }
  li:nth-child(71),
  li:nth-child(73) {
    width: 70px;
  }
  li:nth-child(72) {
    width: 333px;
  }

  li:nth-child(76),
  li:nth-child(78) {
    height: 29px;
    line-height: 29px;
  }
  li:nth-child(76) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  li:nth-child(78) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    position: absolute;
    bottom: 0;
    right: 73px;
  }
}
</style>
