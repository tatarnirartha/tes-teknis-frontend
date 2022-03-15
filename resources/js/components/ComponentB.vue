<template>
    <div class="row">
        <div class="col-12 border py-3">
            <custom-label label_text="Cost Detail" :is_dropdown="true"/>
        </div>
        <div class="col-12 border-top-0 border p-0">
            <table-component/>
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
    }
}
</script>
