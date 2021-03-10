<template>
  <div class="home">
    <div class="padre">
      <h1>Soy el componente Padre</h1>
      <label for="">Soy un input en el componente padre: </label>
      <input type="text" v-model="value" />
      <div>
        <button @click="updateText">
          Soy un botón para borrar en padre
        </button>
      </div>

      <div>
        <p>Soy el valor en padre, enlazado con v-model</p>
        <span
          >Acá está el valor con v-model:
          <p class="message">{{ value }}</p></span
        >
      </div>
      <div>
        <p>Soy el valor en padre, me transmito con emit</p>
        <span
          >Acá está el valor con emit:
          <p class="message">{{ msgHijo }}</p></span
        >
      </div>
      <div>
        <p>Soy el valor en padre, me transmito con .sync</p>
        <span
          >Acá está el valor con .sync:
          <p class="message">{{ otroMsg }}</p></span
        >
      </div>
    </div>
    <Hijo :otroMsg.sync="otroMsg" v-model="value" @input2="updateHijo" />
  </div>
</template>

<script>
  import Hijo from "@/components/Hijo.vue";

  export default {
    name: "Home",
    components: { Hijo },

    name: "App",
    data: () => ({
      value: "",
      msgHijo: "",
      otroMsg: "",
    }),
    methods: {
      updateText() {
        this.value = "";
      },
      updateHijo(value) {
        console.log(value);
        this.msgHijo = value;
      },
    },

    props: {},
  };
</script>

<style lang="scss" scoped>
  .padre {
    background-color: lightgreen;
    margin: 0 auto;
    max-width: 600px;
  }
  .message {
    color: rgb(24, 69, 192);
    font-weight: 700;
    height: 1rem;
  }
</style>
