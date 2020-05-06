import Vue from "vue";
import Vuex from "vuex";
import { User } from '../models/User'
import { decode } from 'jsonwebtoken';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
        user: new User()
    },
    mutations: {
        setUser(state, userAuthToken) {
            localStorage.setItem('SavvyGolfAuthToken', userAuthToken);
            state.user = new User(decode(userAuthToken));
            state.isAuthenticated = true;
        },
        resetUser(state) {
            localStorage.removeItem('SavvyGolfAuthToken');
            state.user = new User();
            state.isAuthenticated = false;
        }
    },
    actions: {
        setUser(context, userAuthToken) {
            context.commit('setUser', userAuthToken);
        },
        resetUser(context) {
            context.commit('resetUser');
        },
    },
    getters: {
        user(state) {
            return state.user;
        },
        userAuthTokenIsValid(state) {
            const secondsSinceEpoch = Math.floor(new Date().getTime() / 1000);
            return (state.user.exp < secondsSinceEpoch)?false:true
        }
    },
    modules: {}
});
