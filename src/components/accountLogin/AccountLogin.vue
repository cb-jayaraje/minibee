<template>
      <div>
    
<div class="min-h-full flex flex-col justify-center py-3 sm:px-6 lg:px-8">
<div class="sm:mx-auto sm:w-full sm:max-w-md lg:w-full lg:max-w-xl xl:max-w-lg  md:w-full md:max-w-md">
  
  <h2 class="mt-6 text-center text-2xl font-medium text-gray-900">
    Welcome back, Anton
  </h2>
  <!-- <p class="mt-2 text-center text-sm text-gray-600">
    You have signed-in using antonbright@chargebee.com.
    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
      Change
    </a>
  </p> -->
</div>

<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md lg:w-full lg:max-w-xl md:w-full md:max-w-md" >
  <div class="bg-white sm:rounded-lg shadow ">
    
    <!--server error starts-->
    <!-- <div class="pt-4 px-10" x-show="errorAlertBox === true;">
      <div class="rounded-md bg-red-50 p-4 " >
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5  text-red-400 cursor-pointer"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800">
              Invalid credentials
            </h3>
          
          </div>
        </div>
      </div>
    </div> -->
  <!--servererror ends-->

    <form class="space-y-6 py-8 px-4   sm:px-10" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div class="mt-1">
          <input id="email" x-model="email" disabled name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div class="mt-1">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
         <!--client side error starts-->
         <div class="h-4 mt-2" >
          <p  class=" text-sm text-red-600" id="email-error" >Cannot be empty</p>
        </div>
         <!--client side error ends-->

      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#"  class="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="button" @click="$emit('success-login', true)"  class="w-full  flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign in
        </button>
      </div>
    </form>

    <div class="">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">
            Or
          </span>
        </div>
      </div>

      
      <div class=" items-center justify-center mx-10 my-6 pb-8">
        <a href="personalise.html">
        <button type="button" class="w-full justify-center inline-flex items-center px-4 py-3 border border-gray-300 shadow-sm  leading-4 text-sm font-medium rounded-lg  antialiased text-gray-700 bg-white  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            
            <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                </g>
              </svg>
              Sign in with Google
          </button>
        </a>



          
    </div>
    

    <!-- <div class="w-full border-t border-gray-300"></div>
    <div class="p-4 bg-gray-50">
      <p class="text-xs text-gray-500">You are on our US data hosting centre. Switch to our <span class="text-blue-600 hover:underline">EU</span> or <span class="text-blue-600 hover:underline">AU</span> data hosting centre.</p>
    </div> -->
    </div>
  </div>
</div>
</div>
<div class=" sm:mx-auto sm:w-full sm:max-w-md lg:w-full lg:max-w-xl md:w-full md:max-w-md">
<p class="text-xs text-center text-gray-500 ">You are on our US data hosting centre. Switch to our <span class="text-blue-600 hover:underline">EU</span> or <span class="text-blue-600 hover:underline">AU</span> data hosting centre.</p>
</div>

<div class=" items-center justify-center mx-10 my-3 pt-4">

<BackToAccount  title='Back to account selection' @on-click="$emit('on-back', {data: 'back'})" />




  
</div>

  </div>
</template>

<script>

import BackToAccount from "./BackToAccount.vue"

export default {

    

    components: {
        BackToAccount
    },
    methods: {
        catchBackEvent(value){
            console.log(value)
        }
    }
    
}
</script>