import { App } from "vue";
import macKeyboard from "./keyboard.vue";

macKeyboard.install = function (Vue: App) {
  Vue.component(macKeyboard.name, macKeyboard);
};

export default macKeyboard;
