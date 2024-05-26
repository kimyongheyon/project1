import dayjs from 'dayjs';

export default {
	install(app) {
		app.config.globalProperties.$dayjs = dayjs;
		// <script setup>에서 사용할 수 있게 하는 방법
		app.provide('dayjs', dayjs);
	},
};
