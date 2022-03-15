<template>
    <div>
        <select class="form-select">
            <option v-if="placeholder != ''" selected disabled hidden>{{placeholder}}</option>
            <option v-for="(d, index) in data" :key="index" value="d.name">{{d.name}}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "CustomSelect",
    props: {
        placehoder: {
            type: String,
            default: ""
        },
        data: {
            type: Array,
            default: () => {
                return []
            }
        },
        placeholder: {
            type: String,
            default: ""
        }
    }

}
</script>

<style scoped>
select {
    background-color: rgb(251, 251, 251);
}

select:invalid{
        color: gray;
    }
</style>