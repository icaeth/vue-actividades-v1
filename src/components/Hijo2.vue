<template>
  <div>
    <div class="child">
      <h2>Hijo 2</h2>
      <p>Score: {{ score }}</p>
      <button @click="rest()">
        Decrement
      </button>
      <input
        id="inputNumber"
        v-model.number="inputValue"
        type="number"
        name=""
      >
      <button @click="addCustom(inputValue)">
        Add to Store
      </button>
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
      rest: "SET_DECREMENT"
    }),
    addCustom: function(value) {
      this.$store.commit("SET_CUSTOM_INCREMENT", value);
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
