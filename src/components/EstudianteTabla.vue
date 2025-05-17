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

    <button v-on:click="agregarEstudiante()">Agregar</button>
    
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Correo</th>
          <th>Carrera</th>
          <th>Boton</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ nombre, apellido, edad, correo, carrera } in lista" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ correo}}</td>
          <td>{{ carrera }}</td>
          <td><button>Ver</button></td>
        </tr>
      </tbody>
    </table>
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

<style scoped>
.container {
  background: rgb(128, 216, 179);
  border: 12px solid;
  border-radius: 12px;
  max-width: 1000px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: black;
  text-align: left;
}
input {
  background: rgb(216, 235, 228);
  color: rgb(1, 8, 5);
  width: 97%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid rgb(0, 217, 255);
  padding: 10px 15px;
}

button{
  background: rgb(3, 102, 69);
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
}
table{
    margin: 50px;
}
tr{
  list-style: none;
  margin-top: 50px;
}
th{
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  color: #333;
  font-size: 18px;
}
td{
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  color: #333;
  font-size: 18px;
}

</style>