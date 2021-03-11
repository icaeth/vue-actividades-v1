<template>
  <div>
    <div class="child">
      <h2>Hijo 1</h2>
      <p>Score: {{ score }}</p>
      <button @click="add()">Increment</button>
      <p>LocalScore: {{ localScore }}</p>
      <button @click="addLocal()">Local + Store</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      localScore: 0
    };
  },
  computed: {
    ...mapState(["score"])
  },
  methods: {
    ...mapMutations({
      add: "increment"
    }),
    addLocal: function() {
      return (this.localScore = this.localScore + this.score);
    }
  }
};
</script>

<style lang="scss" scoped>
.child {
  color: white;
  @include children;
  background-color: red;
  left: 20px;
}
</style>
