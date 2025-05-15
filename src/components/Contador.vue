<template>
  <div class="container">
    <h1>Contador</h1>
    <p>{{ this.numero }} <sup>2</sup>={{ calCuadrado }}</p>
    <div>
        <button v-on:click="incrementar()">+1</button>
        <button v-on:click="decrementar()">-1</button>
    </div>

    <!--
    <p>{{ Texto }}</p>
    <p>{{ activo }}</p>
    <p>{{ usuario.nombre }}</p>
    <p>{{ arreglo }}</p>
    1+1
    {{ 1 + 1 }}
    {{ false ? "Es verdadero" : "Es falso" }}
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: 5,
      texto: "Leonardo Ramirez",
      activo: true,
      usuario: {
        nombre: "Leonardo",
        edad: 24,
        genero: "M",
      },
      arreglo: ["Amarrillo", "Azul"],
    };
  },
  methods: {
    calcularCuadrado() {
        console.log('Entro al metodo');
      return this.numero * this.numero;
    },
    incrementar(){
        this.numero++;

    },
    decrementar(){
        this.numero--;

    },

  },
  computed:{
    calCuadrado(){
        console.log('Entro propiedad computada');
      return this.numero * this.numero;
    },
  },
};
</script>

<style>
</style>