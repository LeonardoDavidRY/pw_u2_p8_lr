<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre"  id="id_nombre" type="text" />
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido"  id="id_apellido" type="text" />

    <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
    {{ nuevoNombre }}
    <ul>
      <li v-for="{ nombre, apellido } in lista" :key="nombre">
        Nombre:{{ nombre }} - apellido: {{ apellido }}
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      nuevoNombre: "nuevo",
      nuevoApellido: "new",
      lista: [
        { nombre: "Leonardo", apellido: "Ramirez" },
        { nombre: "Fatima", apellido: "Fiallos" },
        { nombre: "Jordi", apellido: "Pila" },
        { nombre: "Byron", apellido: "Flores" },
        { nombre: "Michael", apellido: "Barrios" },
        { nombre: "Edlith", apellido: "Vinueza" },
        { nombre: "Mateo", apellido: "Jami" },
      ],
    };
  },
  methods:{
    agregarEstudiante(){
        const nuevo={
            nombre:this.nuevoNombre,
            apellido: this.nuevoApellido,
        };
        this.lista.unshift(nuevo);

    },
  },
};
</script>
 
<style>
</style>