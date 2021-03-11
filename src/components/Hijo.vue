<template>
  <div class="children">
    <h1>Soy el componente Hijo</h1>

    <div class="">
      <button @click="borrarHijo('')">
        Soy un botón para borrar desde el hijo
      </button>
    </div>

    <label for="">Transmito mensajes con v-model: </label>
    <input
      type="text"
      :value="value"
      @input="updateValue($event.target.value)"
    />

    <div>
      <label for="">Transmito mensajes con emit: </label>
      <input
        type="text"
        :msgHijo="msgHijo"
        @input="msgHijo($event.target.value)"
      />
    </div>
    <div>
      <label for="">Transmito mensajes con sync:</label>
      <input
        type="text"
        :otroMsg="otroMsg"
        @input="otroMsg($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["value"],
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    msgHijo(value) {
      this.$emit("input2", value);
    },
    borrarHijo(value) {
      this.$emit("input", value);
    },
    otroMsg(value) {
      this.$emit("update:otroMsg", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.children {
  background-color: lightcoral;
  margin: 0 auto;
  max-width: 600px;
}
</style>
