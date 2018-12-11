import Vue from "vue";
import Scrollspy from "vue2-scrollspy/dist/index"; // [1]

Vue.use(Scrollspy, {
  sectionSelector: "[data-scroll-spy-section]",
  active: {
    selector: "[data-scroll-spy-el]",
    class: "is-active"
  },
  link: {
    selector: "[data-scroll-spy-link]"
  }
});
