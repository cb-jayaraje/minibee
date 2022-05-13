<template>
      <div>
    
<div class="min-h-full  flex flex-col justify-center py-3 sm:px-6 lg:px-8 ">
<div class="sm:mx-auto sm:w-full sm:max-w-md md:w-full md:max-w-xl llg:w-full lg:max-w-xl ">
  
  <h2 class="mt-6 text-center text-2xl font-medium text-gray-900">
    Choose an account
  </h2>
  <p class="mt-2 text-center text-sm text-gray-600">
    You have signed-in using <User />.
    <a @click.prevent="$router.push('/')" class="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500">
      Change
    </a>
  </p>
  
</div>


<!--api error endpoint-->
<!-- <div class="mt-8  lg:w-full lg:max-w-xl md:w-full md:max-w-lg xl:w-full xl:max-w-xl  sm:mx-auto sm:w-full sm:max-w-md w-full  m-auto space-y-4">

<div class="rounded-md bg-red-50 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
    
      <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-red-800">Something went wrong!</h3>
      <div class="mt-2 text-sm text-red-700">
        <ul role="list" class="list-disc pl-5 space-y-1">
          <li>Description explaining what really happened and maybe some possible fixes that they can try or just the error message.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</div> -->

<error-alert v-show="isError">
  <template #icon>
  </template>
  <template #title>
    Something went wrong!
  </template>
  <template #description>
     <li>Description explaining what really happened and maybe some possible fixes that they can try or just the error message.</li>
  </template>
</error-alert>
<!--api error endpoint-->




<div class=" relative mt-8  lg:w-full lg:max-w-xl md:w-full md:max-w-lg xl:w-full xl:max-w-xl  sm:mx-auto sm:w-full sm:max-w-md w-full  m-auto space-y-4 ">




<loading-spinner v-show="loading"></loading-spinner>
  <!--laoding spinner ends-->

  <div class="bg-white shadow overflow-hidden sm:rounded-md">
  <ul role="list" class="divide-y divide-gray-200  w-full">
        <li v-for="(account, index) in accountDetails" :key="index">
    <Account :detail="account" @select-account="selectAccount" />

</li>
  </ul>
</div>
</div>



</div>


  </div>
</template>

<script>


  import Account from './Account.vue'
  import User from './../User.vue'
  import ErrorAlert from './../common/ErrorAlert.vue'
  import { mapGetters } from 'vuex'
  import LoadingSpinner from '../common/LoadingSpinner.vue'


export default {


  name: 'Accounts',
  components: {
    Account,
    User,
    ErrorAlert,
    LoadingSpinner
  },

    data(){
      return {
        loading: false
      }
    },
    computed: {
      accountDetails() {
        return this.$store.getters['accounts/accountDetails']
      },
      isError(){
        return this.$store.getters['accounts/apiErrors']
      },
      ...mapGetters({
        selectedAccount: 'accounts/selectedAccount'
      })
    },
    methods: {

      selectAccount(value){
       this.loading = true;

       setTimeout(()=>{
         this.loading = false;
         this.$store.dispatch({
           type: 'accounts/selectedAccount',
           value: value
         });
         this.$emit('select-account', value.id)
       },2000)
        
      }
      
    },
    mounted () {
     this.$store.dispatch({
              type: 'accounts/apiErrorAlert',
              isError: false
            });
}
  

}
</script>