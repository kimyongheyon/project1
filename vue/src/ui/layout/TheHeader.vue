<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
<!--				<a class="navbar-brand" href="">간편 코인 관리</a>-->
        <RouterLink class="navbar-brand" to="/">간편 코인 관리</RouterLink>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<RouterLink class="nav-link active" to="/">차트</RouterLink>
						</li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">수입</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">설정</RouterLink>
            </li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

//페이지이동
const goPage = () => {
	router.push('/posts/create');
};
</script>

<style lang="scss" scoped></style>
