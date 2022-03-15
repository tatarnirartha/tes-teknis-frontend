<template>
    <div class="py-4 px-5 row">
        <div class="col-12">
            <page-title-component/>
        </div>
        <div class="col-12 main">
            <h1>Component A</h1>
            <component-b/>
        </div>
    </div>
</template>

<script>
import PageTitleComponent from "../components/sub-components/PageTitleComponent.vue";
import ComponentB from "../components/ComponentB.vue";

export default {
    name: "Home",
    components: {
        ComponentB,
        PageTitleComponent
    }
}
</script>

<style scoped>
.main{
    margin-top: 50px;
}
</style>