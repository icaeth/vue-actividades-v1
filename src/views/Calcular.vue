<template>
  <div>
    <h1>Ingrese dos números y la operación</h1>
    <input
      id=""
      v-model.number="a"
      type="number"
      name="a"
    >
    <select
      id=""
      v-model="operator"
      name="operator"
    >
      <option value="+">
        +
      </option>
      <option value="-">
        -
      </option>
      <option value="*">
        *
      </option>
      <option value="/">
        /
      </option>
    </select>
    <input
      id=""
      v-model.number="b"
      type="number"
      name="b"
    >
    <button
      class="boton-azul"
      @click="operacion"
    >
      Calcular
    </button>
    <button
      class="boton-rojo"
      @click="borrar"
    >
      Borrar
    </button>
    <div>
      <h2>
        Resultado: {{ a }} {{ operator }} {{ b }} {{ igual }} {{ resultado }}
      </h2>
    </div>
    <div>
      <pre class="color">
        {
          "a": {{ a }},
          "b": {{ b }},
          "resultado": {{ resultado }},
          "operator": {{ operator }},          
        }
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: null,
      b: null,
      operator: null,
      resultado: null,
      igual: null
    };
  },
  methods: {
    operacion() {
      switch (this.operator) {
        case "+":
          this.resultado = this.a + this.b;
          this.igual = "=";
          break;
        case "-":
          this.resultado = this.a - this.b;
          this.igual = "=";
          break;
        case "*":          
          this.resultado = this.a * this.b;
          this.igual = "=";
          break;
        case "/":          
          this.resultado = this.a / this.b;
          this.igual = "=";
          break;
        default:
          
      }
    },
    borrar() {
      (this.a = null),
        (this.b = null),
        (this.resultado = null),
        (this.operator = null);
      this.igual = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.color {
  background-color: rgb(224, 219, 219);
}
.boton-azul {
  @include boton-azul;
}
.boton-rojo {
  @include boton-rojo;
}
</style>
