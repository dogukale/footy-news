<script>
export default {
  name: "BaseBadge",
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<template>
  <span class="badge"
        :class="type">
    {{ text }}
  </span>
</template>

<style scoped>
.badge {
  background-color: #CCCCCC;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #3D008D;
  color: white;
}

.backend {
  background-color: #71008D;
  color: white;
}

.career {
  background-color: #8D006E;
  color: white;
}
</style>