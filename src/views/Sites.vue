<template>
    <section>
        <div class="p-4 min-h-full bg-white" >


  <div class="flex justify-between ">

    <router-link to="/"><img class="h-12" src="./../assets/images/chargebee-logotype 1.svg" alt=""></router-link>

  </div>

  <!-- main -->
    <Accounts v-if="!accountLoginComp" @select-account="selectAccount" />
    <account-login v-else-if="!twoFactorAuthComp" @success-login="onClickLogin" @on-back="catchBack"></account-login>
    <two-factor-auth v-else @back-to-account="catchBack"></two-factor-auth>


</div>

    </section>
</template>
<script>

import Accounts from '../components/accounts/Accounts.vue'
import AccountLogin from '../components/accountLogin/AccountLogin.vue'
import TwoFactorAuth from './../components/accountLogin/TwoFactorAuth.vue'


export default {
    components: {
        Accounts,
        AccountLogin,
        TwoFactorAuth
    },
    data(){
        return {
            accountLoginComp: false,
            twoFactorAuthComp: false,
        }
    },
    methods: {
        selectAccount(id){
            console.log('main', id)
            if(id){
                this.accountLoginComp = true;
            }
          //  this.$router.push('/');
        },

        onClickLogin(value){
            console.log('val ', value)
            this.twoFactorAuthComp = true;
        },

        catchBack(val){

           
            this.twoFactorAuthComp = false
            this.accountLoginComp = false
            
        },

        
    },
    created(){
        console.log(this.accountLoginComp)
    }
    
}
</script>