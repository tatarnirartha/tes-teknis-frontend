<template>
    <div>
        <input :type="input_type" class="form-control" :class="input_class" :value="input_value" :placeholder="input_placeholder" :style="input_style">
    </div>
</template>

<script>
export default {
    name: "CustomInput",
    props: {
        input_type: {
            type: String,
            default: ""
        },
        input_class: {
            type: String
        },
        input_value: {
            type: String,
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
    }
}
</script>

<style scoped>
input {
    background: rgb(251, 251, 251);
}
</style>