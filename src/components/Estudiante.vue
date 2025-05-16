<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <label for="id_edad">Edad:</label>
    <input v-model="nuevaEdad" id="id_edad" type="text" />
    <label for="id_correo">Correo:</label>
    <input v-model="nuevoCorreo" id="id_correo" type="email" />
    <label for="id_carrera">Carrera:</label>
    <input v-model="nuevaCarrera" id="id_carrera" type="text" />

    <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
    {{ nuevoNombre }}
    <ul>
      <li v-for="{ nombre, apellido, edad, correo, carrera } in lista" :key="nombre">
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} - Correo: {{ correo }} - Carrera: {{ carrera }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "",
      nuevoApellido: "",
      nuevaEdad: "",
      nuevoCorreo: "",
      nuevaCarrera: "",
      lista: [
        {
          nombre: "Leonardo",
          apellido: "Ramirez",
          edad: "24",
          correo: "leo@gmail.com",
          carrera: "Sistemas",
        },
        {
          nombre: "Fatima",
          apellido: "Fiallos",
          edad: "22",
          correo: "fatima@gmail.com",
          carrera: "Industrial",
        },
        {
          nombre: "Jordi",
          apellido: "Pila",
          edad: "23",
          correo: "jordi@gmail.com",
          carrera: "Civil",
        },
        {
          nombre: "Byron",
          apellido: "Flores",
          edad: "23",
          correo: "byron@gmail.com",
          carrera: "Electrónica",
        },
        {
          nombre: "Michael",
          apellido: "Barrios",
          edad: "24",
          correo: "michael@gmail.com",
          carrera: "Mecánica",
        },
        {
          nombre: "Edlith",
          apellido: "Vinueza",
          edad: "25",
          correo: "edlith@gmail.com",
          carrera: "Química",
        },
        {
          nombre: "Mateo",
          apellido: "Jami",
          edad: "23",
          correo: "mateo@gmail.com",
          carrera: "Ambiental",
        },
      ],
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        correo: this.nuevoCorreo,
        carrera: this.nuevaCarrera,
      };
      this.lista.unshift(nuevo);
    },
  },
};
</script>

<style>

</style>