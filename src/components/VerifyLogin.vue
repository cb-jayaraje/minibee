<template>
    <div class="min-h-full flex flex-col justify-start py-12  sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md md:w-full md:max-w-xl">
          <img class="mx-auto h-16 w-auto" src="./../assets/images/chargebee-logotype 1.svg" alt="Workflow">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify to Sign in
          </h2>
         
        </div>
      
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md md:w-full md:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

            <!--server error starts-->
          <alert-danger :errorText="'Invalid OTP'" v-show="isApiError"></alert-danger>
<!--servererror ends-->

            <form class="space-y-6" @submit.prevent="submitForm">
              <p>You would have received an one-time password on your registered email address</p>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  OTP
                </label>
                <div class="mt-1">
                  <input id="otp" name="otp" type="text" v-model="otp" autocomplete="email"  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>

                <!--client side error starts-->
                <div class="h-4 mt-2" v-show="error" >
                  <p  class=" text-sm text-red-600" id="email-error" >Cannot be empty</p>
                </div>
                 <!--client side error ends-->


              </div>
             

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                  <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                    Remember me on this device for 30 days
                  </label>
                </div>
      
           
              </div>
              <div class="">
                <!-- <button type="button" @click="$router.push('/sites/select')" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Next
                  </button> -->

               <button type="submit"  class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Next
                  </button>

              </div>
            </form>
      
            <div class="mt-6">
              <div class="relative">
               
                <div class="relative flex justify-center text-sm text-center">
                  <span class="px-2 bg-white text-gray-500">
                    Didn’t receive OTP? Check spam or <br><a href="#" class="text-indigo-500">click here to resend</a>
                  </span>
                </div>
              </div>
      
             
            </div>
          </div>
         
      
        </div>
      </div>    
</template>

<script>
import AlertDanger from "./common/AlertDanger.vue"
import { mapGetters } from "vuex"; 

export default{

data(){
  return {
    otp: '',
    error: false
  }
},

components: {
  AlertDanger
},

computed: {
  ...mapGetters(['isApiError'])
},

methods: {
  submitForm(){


   if(this.otp === ''){
     this.$store.dispatch({
       type: 'apiError',
       isError: true
     });

     return;
   }

   this.$store.commit('clearApiError');

    this.$router.push('/sites/select')

  }
}

}
</script>