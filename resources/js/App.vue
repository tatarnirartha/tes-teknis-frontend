<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "app"
}
</script>

<style>
.center-vertical {
    vertical-align: middle;
}

.big-input {
    height: 55px;
}

.big-btn {
    height: 55px;
    width: 55px;
}

.mw-1 {
    min-width: 40px;
    max-width: 120px;
}

.mw-2 {
    min-width: 60px;
    max-width: 150px;
}

.mw-3 {
    min-width: 100px;
    max-width: 400px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>