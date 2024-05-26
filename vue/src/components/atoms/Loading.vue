<template>
    <div v-if="loadingEnable">
        <div class="v-a-loader">
            <div class="loading-layout">
                <div>
                    <img :style="customStyle" :src="image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue';
const loadingEnable = ref(false);
const props = defineProps({
    /** Size of the loader. Options ['small', 'medium', 'large'] */
    size: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['small', 'medium', 'large'].indexOf(value) !== -1
        }
    },
    customStyle: {
        type: String,
        default: 'background-size: cover; width: 220px; height: 220px; display: inline-block; vertical-align: text-bottom;'
    },
    enable: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: () => require('@/assets/logo.png')
    }
})

watchEffect(() => {
    loadingEnable.value = props.enable;
    {
        loadingEnable.value ? document.body.classList.add('ovrFlowHidden') : document.body.classList.remove('ovrFlowHidden')
    }
});
</script>

<style scoped>
.v-a-loader {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1031;
    background-color: rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat;
    background-position: center;
}

.loading-layout {
    z-index: 1011;
    position: fixed;
    padding: 0px;
    margin: -110px 0px 0px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: rgb(0, 0, 0);
    border: 0px;
    cursor: wait;
}

@keyframes loader {
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1.0);
    }
}
</style>