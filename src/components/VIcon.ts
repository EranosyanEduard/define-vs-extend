import { defineComponent } from "vue";
import VIcon_ from "./VIcon_.vue";
export default defineComponent({
  functional: true,
  render(h, { data, children }) {
    return h(VIcon_, data, children);
  },
});
