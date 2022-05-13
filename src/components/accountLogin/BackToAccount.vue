<template>
    
<button type="button" @click="onClick"  class="w-full justify-center inline-flex items-center px-4 py-3   leading-4 text-sm font-medium rounded-lg  antialiased text-blue-600 bg-white  ">
    
      <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      {{title}}
  </button>

</template>

<script>
    export default {
        props:{
        title: String
    },

       methods: {
           onClick() {
               this.$emit('on-click', {data: 'back'})
           },
       }

    }
</script>