<template>
    <div :class="[spinnerTheme]" v-if="spinnerLoading">
        <div class="spinner-bg"  >
            <div class="spinner-wrap">
                <svg class="spinner__sp" viewBox="0 0 160 160" width="160px" height="160px" xmlns="http://www.w3.org/2000/svg">
                    <!-- Ring -->
                    <g fill="none" stroke-linecap="round" stroke-width="24">
                        <circle class="sp__ring" r="60" cx="80" cy="80" stroke="#ddd" />
                        <g class="spinner__ring-rotate">
                            <circle class="spinner__ring-stroke" cx="80" cy="80" r="60" fill="none" stroke="#006BDC" stroke-width="24" border-width="24" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)" />
                        </g>
                    </g>
                </svg>
                <p class="spinner__text" v-if="text">
<!--                    <VirtualDOMParser :html="text"></VirtualDOMParser>-->
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue';
const spinnerLoading = ref(false);
const props = defineProps({
    /** Size of the loader. Options ['small', 'medium', 'large']
     *
     * */
    size: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['small', 'medium', 'large'].indexOf(value) !== -1
        }
    },
    spinnerTheme: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: undefined
    },
    enable: {
        type: Boolean,
        default: false,
        required: true
    }
})

watchEffect(() => {
    spinnerLoading.value = props.enable;
    document.body.classList.toggle('ovrFlowHidden', props.enable);
});


</script>



<style scoped>
.spinner-bg{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    z-index: 999999;
    background: #fff;
}
.spinner-wrap{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:100%;
    padding:0 1.5rem;
    text-align: center;
}
.spinner__sp {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    margin:0 auto;
}

.spinner__ring-rotate,
.spinner__ring-stroke {
    animation: 1.8s linear infinite;
}

.spinner__ring-rotate,
.spinner__ring-stroke {
    transform-origin: 80px 80px;
}
.spinner__ring-rotate {
    animation-name: ringRotate;
}
.spinner__ring-stroke {
    animation-name: ringStroke;
    transform: rotate(-45deg);
}
/* Animations */

@keyframes ringRotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(720deg);
    }
}
@keyframes ringStroke {
    from,
    to {
        stroke-dashoffset: 452;
        transform: rotate(-45deg);
    }
    50% {
        stroke-dashoffset: 169.5;
        transform: rotate(-180deg);
    }
}

.spinner__text{
    background: #14161A;
    border-radius: 0.375rem;
    color:#fff;
    text-align: center;
    padding:0.375rem 0.75rem;
    margin-top:1.5rem;
    display: inline-block;
    word-break: break-word;
}
.dark .spinner-bg{
    background-color:rgba(0,0,0,0.6) !important;
}

</style>