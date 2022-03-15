import Vue from "vue";
import Vuex from "vuex";

import instruction from "./modules/instruction/index";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
        instruction
	},
	strict: true,
});
