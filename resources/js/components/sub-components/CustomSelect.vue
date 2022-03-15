<template>
    <div>
        <select class="form-select" >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "CustomSelect",

}
</script>

<style scoped>
select {
    background-color: rgb(251, 251, 251);
}
</style>