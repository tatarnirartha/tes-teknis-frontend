<template>
    <div>
        <button class="btn" :class="btn_class" @click="handleClick" :style="btn_style">
            <font-awesome-icon v-if="icon !=''" :icon="icon"/>
            {{btn_label}}
        </button>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: "CustomButton",
    components: {
        FontAwesomeIcon
    },
    props: {
        btn_label: {
            type: String,
            default: ""
        },
        btn_class: {
            type: String,
            default: "btn-light"
        },
        btn_style: {
            type: String,
            default: ""
        },
        icon: {
            type: String,
            default: ""
        }
    },
    methods: {
        handleClick() {
            this.$emit('btnClick');
        }
    }
}
</script>

<style scoped>
.min-btn {
    background: rgb(229, 229, 229);
}

.plus-btn {
    background: rgb(0, 192, 191);
    color: white;
}
</style>