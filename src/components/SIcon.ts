import { defineComponent } from "vue";
import VIcon from "./VIcon";

export default defineComponent({
  data() {
    return { disabled: true };
  },
  mounted() {
    setTimeout(() => {
      this.disabled = !this.disabled;
    }, 5_000);
  },
  render(h) {
    return h(VIcon, {
      attrs: this.$attrs,
      props: { size: this.disabled ? 100 : 200 },
    }, JSON.stringify(this.$attrs));
  },
});
