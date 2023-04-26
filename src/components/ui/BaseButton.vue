<script>
export default {
  name: "BaseButton",
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: "/"
    }
  }
};
</script>

<template>
  <button v-if="!link"
          :class="mode">
    <slot />
  </button>
  <router-link v-else
               :to="to"
               :class="mode">
    <slot />
  </router-link>
</template>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #39AEA9;
  border: 1px solid #39AEA9;
  color: white;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
}

.flat {
  background-color: transparent;
  color: #39AEA9;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #39AEA9;
  color: #39AEA9;
}
</style>