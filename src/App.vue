<template>
  <AsignaturaTablaView />
</template>

<script>
import HolaMundoView from "@/views/HolaMundoView.vue";
import ContadorView from "@/views/ContadorView.vue";
import EstudianteView from "@/views/EstudianteView.vue";
import EstudianteTablaView from "@/views/EstudianteTablaView.vue";
import AsignaturaTablaView from "@/views/AsignaturaTablaView.vue";

export default {
  name: "App",
  components: {
    HolaMundoView,
    ContadorView,
    EstudianteView,
    EstudianteTablaView,
    AsignaturaTablaView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
