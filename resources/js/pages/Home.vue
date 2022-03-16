<template>
    <div class="py-4 row">
        <div class="col-12">
            <page-title-component/>
        </div>
        <div class="col-12 main">
            <component-a :submit="submit" :draft="draft" :reset="reset"/>
            <component-b :submit="submit" :draft="draft" :reset="reset"/>
            
            <div class="col-12 bottom-sec mt-5 p-4 d-flex justify-content-end h-100">
                <custom-button btn_label="Cancel" @btnClick="cancelClick()" btn_class="big-input"/>
                <custom-button btn_label="Save As Draft" btn_style="background-color: white;" btn_class="border mx-2 big-input" @btnClick="draftClick()"/>
                <custom-button btn_label="Submit" btn_style="background-color: rgb(0, 191, 191); color: white;" btn_class="big-input" @btnClick="submitClick()"/>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitleComponent from "../components/sub-components/PageTitleComponent.vue";
import ComponentB from "../components/ComponentB.vue";
import CustomButton from "../components/sub-components/CustomButton.vue";
import ComponentA from "../components/ComponentA.vue";

export default {
    name: "Home",
    components: {
        ComponentA,
        ComponentB,
        PageTitleComponent,
        CustomButton
    },
    data() {
        return {
            submit: "",
            draft: "",
            reset: ""
        }
    },
    methods: {
        submitClick() {
            this.submit = "submit";
        },
        draftClick() {
            this.draft = "draft";
        },
        cancelClick() {
            this.reset = "reset";
        }
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