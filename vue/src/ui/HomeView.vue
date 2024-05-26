<template>
	<div class="container">
		<h2>홈화면</h2>
    <p>{{test1}}</p>
    <button class="btn btn-primary" @click="fnTest">버튼</button>
	</div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const test1 = ref('');

const fnTest = () =>{

}
onMounted(()=>{
  axios.get('http://localhost:8080/api/hello').then( response => {
    test1.value = response.data
  } )
})
</script>

<style lang="scss" scoped></style>
