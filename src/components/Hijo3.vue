<template>
  <div>
    {{ score }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["score"])
  }
};
</script>

<style lang="scss" scoped></style>
