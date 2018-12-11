import Vue from "vue";
import App from "./App";
import "@babel/polyfill";

import "global/directives.js";

window.Vue = new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
