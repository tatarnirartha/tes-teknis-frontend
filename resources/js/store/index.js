import Vue from "vue";
import Vuex from "vuex";

import instructions from "./modules/instructions/index";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
        instructions
	},
	strict: true,
});
