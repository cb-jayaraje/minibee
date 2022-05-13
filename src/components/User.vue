<template>
    <span>{{userDetail}}</span>
</template>

<script>
    export default {
        computed: {
            userDetail() {
              
                return this.$store.getters.checkLoggedUser
            }
        }
    }
</script>