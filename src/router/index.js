import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login.vue"),
        meta: {
            authRequired: false,
        }
    },
    {
        path: "/",
        name: "Home",
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        meta: {
            authRequired: true,
        }
    },
    {
        path: "/play-golf",
        name: "Play Golf",
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/PlayGolf.vue"),
        meta: {
            authRequired: true,
        }
    },
    {
        path: "/statistics",
        name: "Statistics",
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/Statistics.vue"),
        meta: {
            authRequired: true,
        }
    },
    {
        path: "/your-bag",
        name: "Your Bag",
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/YourBag.vue"),
        meta: {
            authRequired: true,
        }
    },
    {
        path: "/analytics",
        name: "Analytics",
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/Analytics.vue"),
        meta: {
            authRequired: true,
        }
    },
    {
        path: "/your-profile",
        name: "Your Profile",
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/YourProfile.vue"),
        meta: {
            authRequired: true,
        }
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});


router.beforeEach((to, from, next) => {
    if (to.path === '/logout') {
        store.dispatch('resetUser')
            .then(() => {
                next('/login');
            });
        return;
    } else if (to.path === '/login') {
        if (store.getters.user.exp === 0) {
            const userAuthToken = localStorage.getItem("SavvyGolfAuthToken");
            if (userAuthToken !== null) {
                store.dispatch('setUser', userAuthToken);
            }
        }
        const userAuthTokenIsValid = store.getters.userAuthTokenIsValid;
        if (!userAuthTokenIsValid) {
            store.dispatch('resetUser');
            next();
        } else {
            next(from);
        }
    } else if (to.meta.authRequired === false) {
        next()
    } else {
        if (store.getters.user.exp === 0) {
            const userAuthToken = localStorage.getItem("SavvyGolfAuthToken");
            if (userAuthToken !== null) {
                store.dispatch('setUser', userAuthToken);
            }
        }
        const userAuthTokenIsValid = store.getters.userAuthTokenIsValid;
        if (!userAuthTokenIsValid) {
            store.dispatch('resetUser');
            next('/login');
        } else {
            next();
        }
    }
})
  

export default router;
