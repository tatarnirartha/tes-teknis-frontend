<template>
    <div>
        <select class="form-select" v-model="selectVal" :class="select_class">
            <option v-if="placeholder != ''" selected disabled hidden>{{placeholder}}</option>
            <option v-for="(d, index) in data" :key="index" :value="d.name">
                <font-awesome-icon :icon="d.icon" v-if="data_icon == true"/>
                {{d.name}}
            </option>
        </select>
    </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: "CustomSelect",
    components: {
        FontAwesomeIcon
    },
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
        },
        select_class: {
            type: String
        },
        data_icon: false

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