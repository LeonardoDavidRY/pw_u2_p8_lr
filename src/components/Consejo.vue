<template>
  <div class="container">
    <div class="consejo-container">
      <button @click="onInput">Obtener consejo</button>
      <div v-if="consejo">
        <h2>Consejo del día:</h2>
        <p>{{ consejo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerConsejoFachada } from "../clients/Consejo.js";

export default {
  data() {
    return {
      trigger: "",
      consejo: "",
    };
  },
  watch: {
    trigger(newVal, oldVal) {
      // Si quieres que se actualice automáticamente al cambiar el input, descomenta la siguiente línea:
      // this.obtenerConsejo();
    },
  },
  methods: {
    async obtenerConsejo() {
      this.consejo = "Pensando...";
      const data = await obtenerConsejoFachada();
      this.consejo = data.slip.advice;
    },
    onInput() {
      this.obtenerConsejo();
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.consejo-container {
  background: #222;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background: #4caf50;
  color: white;
  cursor: pointer;
}
h2,
p {
  color: white;
}
</style>