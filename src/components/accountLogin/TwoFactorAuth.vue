<template>
    <div>
          <div class="min-h-full flex flex-col justify-center py-3 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md lg:w-full lg:max-w-xl md:w-full md:max-w-md">
      
      <div class="mt-6 flex gap-2 items-center justify-center">
        <img src="lock.svg" alt="">
        <h2 class="text-2xl font-medium text-gray-900">
          Two Factor authentication
        </h2>
      </div>
      
      
    </div>
  
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md lg:w-full lg:max-w-xl md:w-full md:max-w-md">
      <div class="bg-white sm:rounded-lg shadow ">

         <!--server error starts-->
    <div class="pt-4 px-10" x-show="errorAlertBox === true;">
      <div class="rounded-md bg-red-50 p-4 " >
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5  text-red-400 cursor-pointer"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800">
              Invalid code
            </h3>
          
          </div>
        </div>
      </div>
    </div>
  <!--servererror ends-->


        <form class="space-y-6 py-8 px-4   sm:px-10" action="#" method="POST">
          <p>Enter code from your authentication app</p>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Enter 6 digit code
            </label>
            <div class="mt-1">
              <input id="text" name="text" type="text" autocomplete="Enter 6 digit code"  required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>

          <div class="text-sm">
            <a href="#"  class="font-medium text-indigo-600 hover:text-indigo-500">
              Use recovery codes
            </a>
          </div>
  

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me on this device for 30 days
              </label>
            </div>
  
            
          </div>​         
          <div class="lg:flex lg:gap-4 justify-self-end ">
            <!-- <button type="button" class=" sm:w-full text-center lg:inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Use recovery codes
            </button> -->
            
            <button type="button"  class="lg:w-full mt-3 lg:mt-0 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Done
            </button>
          </div>
        </form>
        
      </div>
    </div>
  </div>
  
  <div class=" items-center justify-center mx-10 my-3">
    <a >
    <button type="button" @click="onClickBack" class="w-full justify-center inline-flex items-center px-4 py-3   leading-4 text-sm font-medium rounded-lg  antialiased text-blue-600 bg-white  ">
        
          <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to account selection
      </button>
    </a>
  
    
  
      
  </div>
  
    </div>
</template>

<script>
export default {
    
    methods: {
        onClickBack() {
            this.$emit('back-to-account', false);
        }
    }
}
</script>