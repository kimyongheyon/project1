<template>
    <slot></slot>
</template>

<script setup>
import {onErrorCaptured} from "vue";

onErrorCaptured((err, vm, info) => {
    console.log("not invoked");
    console.log("Parent: " + err.toString());
    console.log("info: " + info);
    return false;
});
</script>

<style scoped>

</style>