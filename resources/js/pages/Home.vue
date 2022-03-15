<template>
    <div class="py-4 row">
        <div class="col-12">
            <page-title-component/>
        </div>
        <div class="col-12 main">
            <h1>Component A</h1>
            <component-b/>
            <div>
                <div class="col-12 bottom-sec mt-5 p-4 d-flex justify-content-end">
                <custom-button btn_label="Cancel"/>
                <custom-button btn_label="Save As Draft" btn_style="background-color: white;" btn_class="border mx-2"/>
                <custom-button btn_label="Submit" btn_style="background-color: rgb(0, 191, 191); color: white;"/>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitleComponent from "../components/sub-components/PageTitleComponent.vue";
import ComponentB from "../components/ComponentB.vue";
import CustomButton from "../components/sub-components/CustomButton.vue"

export default {
    name: "Home",
    components: {
        ComponentB,
        PageTitleComponent,
        CustomButton
    }
}
</script>

<style scoped>
.main{
    margin-top: 50px;
}

.bottom-sec {
    background-color: rgb(251, 251, 251);
}
</style>