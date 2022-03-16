<template>
    <div>
        <select class="form-select" v-model="selectVal">
            <option v-if="placeholder != ''" selected disabled hidden>{{placeholder}}</option>
            <option v-for="(d, index) in data" :key="index" :value="d.name">{{d.name}}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "CustomSelect",
    props: {
        value: {
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
    },
    computed: {
        selectVal: {
            get(){
                return this.value;
            },
            set(value){
                this.$emit('input', value);
            }
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