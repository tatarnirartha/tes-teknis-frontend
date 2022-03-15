<template>
    <div>
        <input :type="input_type" class="form-control" :class="input_class" :placeholder="input_placeholder" :style="input_style" v-model="inputVal">
    </div>
</template>

<script>
export default {
    name: "CustomInput",
    props: {
        input_type: {
            type: String,
            default: "text"
        },
        input_class: {
            type: String
        },
        value: {
            default: ""
        },
        input_placeholder: {
            type: String,
            default: ""
        },
        input_style: {
            type: String,
            default: ""
        }
    },
    computed: {
        inputVal: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }
}
</script>

<style scoped>
input {
    background: rgb(251, 251, 251);
}
</style>