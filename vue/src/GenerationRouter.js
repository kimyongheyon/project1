import {createRouter, createWebHistory} from 'vue-router';

class GenericRouter {
    constructor() {
        const baseContext = '';

        const routes = [
            {
                path: `${baseContext}/`,
                redirect: `${baseContext}/Home`,
            },
        ];

        this.instance = createRouter({
            history: createWebHistory(),
            routes: routes,
            scrollBehavior(to, from, savedPosition) {
                if (savedPosition) {
                    return savedPosition;
                } else {
                    return { x: 0, y: 0 };
                }
            }
        });

        this.baseContext = baseContext;
    }
    async dynamic() {
        let routes = await apiCall.call(this);

        routes.forEach(route => {
            this.instance.addRoute(route);
        });

        function apiCall() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(
                        [
                            {
                                path: `${this.baseContext}/`,
                                name: 'intro',
                                component: () => import('./ui/Intro.vue'),
                            },
                            {
                                path: `${this.baseContext}/home`,
                                name: 'home',
                                component: () => import('./ui/HomeView.vue'),
                            },
                        ]
                    )
                }, 6.7);
            });
        }
    }
}

const router = new GenericRouter();
await router.dynamic();

export {router as default}