import { defineComponent } from "vue";
import VIcon from "./VIcon";

export default defineComponent({
  data() {
    return { size: 200 };
  },
  mounted() {
    setTimeout(() => {
      this.size *= 2;
    }, 5_000);
  },
  render(h) {
    return h(
      VIcon,
      {
        attrs: this.$attrs,
        props: { size: this.size },
      },
      JSON.stringify(this.$attrs)
    );
  },
});
