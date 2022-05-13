<template>

     <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
       
    <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
    <router-link to='/'  class="menu-a">
      <!--
        Heroicon name: outline/home

        Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
      -->
      <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
      </svg>
      Home
    </router-link>

   <a  @click.prevent="toggleInvoiceCreditNotes" class="menu-a relative">
      <!-- Heroicon name: outline/users -->
      <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
      Customers

     
    </a>
     

    <router-link to='/subscriptions' class="menu-a">
                      <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
      Subscriptions
    </router-link>

  <a  @click.prevent="toggleInvoiceCreditNotes" class="menu-a relative">   
        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>

       <span class=" inline-flex justify-between flex-1">
                Invoices & Credit Notes

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
          </span> 
    </a>
    <div class="  pl-8 " :class="inovicesCreditnotes ? 'block' : 'hidden'">
        
           <router-link to="/invoices" class="menu-a cursor-pointer">Invoice</router-link>
           <router-link to="/credit_notes" class="menu-a cursor-pointer">Credit Notes</router-link>
        
      </div>

    <a href="#" class="menu-a">            
        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
      Invoices
    </a>

       <router-link to="/quotes" class="menu-a cursor-pointer">           
        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
      Quotes
   </router-link>
       <router-link to="/orders" class="menu-a cursor-pointer">           
        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
      Orders
   </router-link>

   <a @click.prevent="toggleproductCalalogSubMenu" class="menu-a cursor-pointer">   
                        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        <span class=" inline-flex justify-between flex-1">
          Product Catalog
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
          </span> 
      </a>
      <div class=" pl-8 " :class="productCalalogSubMenu ? 'block' : 'hidden'">
        <router-link to="/settings" class="menu-a cursor-pointer">Plans</router-link>
       <router-link to="/addons" class="menu-a cursor-pointer">Addons</router-link>
       <router-link to="/coupons" class="menu-a cursor-pointer">Coupons</router-link>
       <router-link to="/coupon_sets" class="menu-a cursor-pointer">Coupon Sets</router-link>
      
      </div>

    <a @click.prevent="toggleLogsSubMenu" class="menu-a cursor-pointer">   
                        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        <span class=" inline-flex justify-between flex-1">
         Logs
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
          </span> 
      </a>
      <div class=" pl-8 " :class="logsSubMenu ? 'block' : 'hidden'">
        <router-link to="/transactions" class="menu-a cursor-pointer">Transactions</router-link>
       <router-link to="/email_notifications" class="menu-a cursor-pointer">Email Logs</router-link>
       <router-link to="/events" class="menu-a cursor-pointer">Events</router-link>
      
      </div>



      <a @click.prevent="toogleRevenueSubMenu" class="menu-a cursor-pointer">   
                        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        <span class=" inline-flex justify-between flex-1">
          RevenueStory
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
          </span> 
      </a>
      <div class=" pl-8 " :class="revenueSubMenu ? 'block' : 'hidden'">
        <router-link to="/revenuestory" class="menu-a cursor-pointer">Dashboard</router-link>
       <router-link to="/metric" class="menu-a cursor-pointer">Metric Explorer</router-link>
          <router-link to="/accounts" class="menu-a cursor-pointer">Customer Insights</router-link>
        <router-link to="/settings" class="menu-a cursor-pointer">Accounting Reports</router-link>
        <router-link to="/alert_goals" class="menu-a pointer">Alerts and Goals</router-link>
        <router-link to="/report_builder" class="menu-a cursor-pointer">Report builder</router-link>

   
      
      </div>


       <a @click.prevent="toggleSettings" class="menu-a cursor-pointer">   
                        <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        <span class=" inline-flex justify-between flex-1">
          Settings
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
          </span> 
      </a>
      <div class=" h-32 pl-8 " :class="settingSubMenu ? 'block' : 'hidden'">
        <router-link to="/settings" class="menu-a cursor-pointer">Configure Chargebee</router-link>
        
         <router-link to="/legacy_integrations" class="menu-a cursor-pointer">Third-Party Integrations</router-link>
         <router-link to="/import_and_export" class="menu-a cursor-pointer">Import & Export Data</router-link>
               <router-link to="/users" class="menu-a cursor-pointer">Team Members</router-link>

 <router-link to="/chargebee_notifications" class="menu-a cursor-pointer">Team Members</router-link>

 <router-link to="/security" class="menu-a cursor-pointer">security</router-link>

      </div>


  </nav>
</template>

<script>

 // import User from './../../mixin/User'

  export default {
     data(){
      return {
        settingSubMenu: false,
        inovicesCreditnotes: false,
        productCalalogSubMenu: false,
        logsSubMenu: false,
        revenueSubMenu: false,
      }
    },
   // mixins: [User],
    
    methods: {
      toggleSettings(){
        this.settingSubMenu = !this.settingSubMenu
      },
      toggleInvoiceCreditNotes(){
        this.inovicesCreditnotes = !this.inovicesCreditnotes
      },
      toggleproductCalalogSubMenu(){
        this.productCalalogSubMenu = !this.productCalalogSubMenu
      },
      toggleLogsSubMenu(){
        this.productCalalogSubMenu = !this.productCalalogSubMenu
      },
      toggleLogsSubMenu(){
        this.logsSubMenu = !this.logsSubMenu
      },
      toogleRevenueSubMenu(){
        this.revenueSubMenu = !this.revenueSubMenu
      }

      
    }
  }
</script>

<style scoped>
 .menu-a {
      @apply hover:bg-purple-50 text-gray-700 group-hover:text-purple-700  flex items-center px-2 py-2 text-sm font-medium leading-5 rounded-md;
    }
  
    .menu-icon {
      @apply text-gray-500 group-hover:text-purple-700 mr-3 flex-shrink-0 h-6 w-6;
    }
</style>