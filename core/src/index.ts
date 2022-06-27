import { App } from "vue";
import macKeyboard from "./keyboard.vue";

const install = (Vue: App) => {
    Vue.component(macKeyboard.name, macKeyboard);
}

export {macKeyboard}

export default {install};
