<template>
  <button class="btn" v-if="!link" :class="mode" :color="color">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode" :color="color">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
  },
};
</script>

<style scoped>
.btn {
  @apply shadow-md p-3;
}
/* .primary {
  @apply bg-primary-600 text-primary-200 hover:bg-primary-800 shadow-md p-3 rounded-3xl ;
}
.primary-outline {
  @apply bg-transparent text-purple-900 border border-purple-900 hover:bg-purple-800 hover:text-purple-200 shadow-md p-3 rounded-3xl;
} */
</style>
