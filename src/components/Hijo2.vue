<template>
  <div>
    <div class="child">
      <h2>Hijo 2</h2>
      <p>Score: {{ score }}</p>
      <button @click="rest()">Decrement</button>
      <input v-model="inputValue" type="number" name="" id="inputNumber" />
      <button @click="addCustom(inputValue)">Add to Store</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      inputValue: 0
    };
  },
  computed: {
    ...mapState(["score"])
  },
  methods: {
    ...mapMutations({
      rest: "decrement"
    }),
    addCustom: function(value) {
      this.$store.commit("customIncrement", parseInt(value));
    }
  }
};
</script>

<style lang="scss" scoped>
.child {
  color: white;
  @include children;
  background-color: blue;
  left: 190px;
}
#inputNumber {
  width: 100px;
}
</style>
