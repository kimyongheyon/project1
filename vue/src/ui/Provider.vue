<template>
    <Spinner :enable="spinner.enable"></Spinner>
    <Loading :enable="loading.enable" ></Loading>
    <slot></slot>
</template>

<script setup>
import Loading from "@/components/atoms/Loading.vue";
import Spinner from "@/components/atoms/Spinner.vue";
import {provide, ref, watchEffect, watchSyncEffect} from "vue";

const spinner = ref({enable: false});
const loading = ref({enable: false});
const isRender = ref(true);

watchEffect(()=>{
    if (alert.value) {
        isRender.value = true;
    }
});

provide('$component', {
    spinner: spinner,
    loading: loading
});

</script>

<style scoped>

</style>