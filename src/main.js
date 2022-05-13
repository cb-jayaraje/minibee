import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import './index.css'
import router from './router'
// import { createStore } from 'vuex'
import store from './store/index.js'


// const store = createStore({
//     state() {
//     return {
//         user: 'as',
//         loggedIn: false,
//         loading: false,
//         isLoggedIn: false,
//         }   
//     },
//     mutations: {
//         logUser( state, payload){
//             console.log(payload)
//             state.user = payload.user
//             state.loggedIn = payload.loggedIn
//         },
//         loadingSpinner(state, payload) {
//             state.loading = payload.loading;
//         },
//         setAuth(state, payload){
//             state.isLoggedIn = payload.isAuth;
//         }
//     },
//     actions: {
//         logUser(context, payload) {
//             setTimeout(()=>{
//                 context.commit('logUser', payload);
//             },2000);
//         },
//         login(context){
//             context.commit('setAuth', {isAuth: true})
//         },
//         logout(context){
//             context.commit('setAuth', {isAuth: false})
//         }

//     },
//     getters: {
       
//         loggedUser(state) {
//             return state.user;
//         },
//         loggedIn(state){
//             return state.loggedIn
//         },
//         loading(state){
//             return state.loading
//         },
//         checkLoggedUser(_, getters) {
//             let user = getters.loggedUser;
//             let loggedIn = getters.logginIn;
//             // if(user !== 'jayaraj.e@chargebee.com'){
//             //     user = 'Suopers'
//             // }else {
//             //     user = "waste"
//             // }

//             return user
//         },

//         userIsAuthendicated(state){
//             return state.isLoggedIn
//         }
//     }
   

// });
const app = createApp(App);

app.directive('click-outside', {
    mounted(el, binding, vnode) {
      el.clickOutsideEvent = function(event) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
          console.log(binding.value(event, el))
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  });

app.use(store)
app.use(router)

app.component("base-card", BaseCard);
app.component("base-button", BaseButton)

app.mount('#app')
