<template>
    <div class="px-5">
        <div class="row">
            <div class="col-12 border py-3">
                <custom-label label_text="Cost Detail" :is_dropdown="true" :data="data" label_class="text-muted"/>
            </div>
            <div class="col-12 border-top-0 border p-0">
                <table-component :submit="submit" :draft="draft" :reset="reset"/>
            </div>
        </div>    
    </div>
</template>

<script>
import CustomLabel from "./sub-components/CustomLabel.vue"
import TableComponent from "./sub-components/TableComponent.vue";

export default {
    name: "ComponentB",
    components: {
        CustomLabel,
        TableComponent
    },
    data() {
        return {
            data: [
                {
                    name: "Cost Detail"
                },
                {
                    name: "Other Detail"
                }
            ]
        }
    },
    props: {
        submit: {
            type: String,
            default: ""
        },
        draft: {
            type: String,
            default: ""
        },
        reset: {
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>

</style>