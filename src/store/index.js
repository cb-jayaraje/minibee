import { createStore } from "vuex";
import accountsModules from './modules/accounts.js'

const store = createStore({
    modules: {
        accounts:accountsModules
    },
    state() {
    return {
        user: 'as',
        userEmail: '',
        loggedIn: false,
        loading: false,
        isLoggedIn: false,
        apiError: false,
        }   
    },
    mutations: {
        logUser( state, payload){
            console.log(payload)
            state.user = payload.user
            state.loggedIn = payload.loggedIn
        },
        loadingSpinner(state, payload) {
            state.loading = payload.loading;
        },
        setAuth(state, payload){    
            state.isLoggedIn = payload.isAuth;
        },
        apiError(state, payload) {
           
            state.apiError = payload.isError

            console.log(state.apiError)
        },

        clearApiError(state) {
            state.apiError = false;
        }

    },
    actions: {
        logUser(context, payload) {
            setTimeout(()=>{
                context.commit('logUser', payload);
            },2000);
        },
        login(context){
            context.commit('setAuth', {isAuth: true})
        },
        logout(context){
            context.commit('setAuth', {isAuth: false})
        },
        apiError(context, payload) {
          
            context.commit('apiError', payload)
        }
        

    },
    getters: {
       
        loggedUser(state) {
            return state.user;
        },
        loggedIn(state){
            return state.loggedIn
        },
        loading(state){
            return state.loading
        },
        apiError(state) {
            return state.apiError
        },
        checkLoggedUser(_, getters) {
            let user = getters.loggedUser;
            let loggedIn = getters.logginIn;
            // if(user !== 'jayaraj.e@chargebee.com'){
            //     user = 'Suopers'
            // }else {
            //     user = "waste"
            // }

            return user
        },

        userIsAuthendicated(state){
            return state.isLoggedIn
        },
        isApiError(state) {
            return state.apiError;
        }
    }
   

});

export default store;