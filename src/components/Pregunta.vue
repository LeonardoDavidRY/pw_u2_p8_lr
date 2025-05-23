<template>
  <div class="container">
    <img v-if="imagen" :src="imagen" alt="No se pudo cargar la imagen" />
    <div class="container-2"></div>

    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con signo de pregunta(?)</p>
      <div v-if="esValida">
        <h2>{{ pregunta }}</h2>
        <h1>{{ respuesta }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
import { consultarRespuestaFachada } from "@/clients/YesNoClient.js";

export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
      esValida: false,
    };
  },
  watch: {
    pregunta(Value, oldValue) {
      this.esValida = false;
      if (Value.includes("?")) {
        this.esValida = true;
        console.log("Valor actual:" + Value);
        console.log("Valor anterior:" + oldValue);
        //aqui deberia consultar el api
        this.consumirAPI();
      }
    },
  },
  methods: {
    async consumirAPI() {
      this.respuesta = "Pensando...";
      const resp = await consultarRespuestaFachada();
      console.log(resp);
      console.log(resp.image);
      console.log(resp.answer);
      console.log(resp.forced);
      this.respuesta = resp.answer;
      this.imagen = resp.image;
    },
  },
};
</script>

<style scoped>
.container-2,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}
.container-2 {
  background-color: rgba(0, 0, 0, 0.5);
}
.pregunta-container {
  position: relative;
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-top: 70px;
}
input:focus {
  outline: none;
}
p {
  color: white;
  font-size: 25px;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 160px;
}
</style>