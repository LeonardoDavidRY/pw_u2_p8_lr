<template>
  <div class="container">
    <div v-if="mostrar">
      <h1>Asignatura Guardada</h1>
    </div>
    <label for="id_codigo">Código:</label>
    <input v-model="nuevoCodigo" id="id_codigo" type="text" />
    <label for="id_titulo">Título:</label>
    <input v-model="nuevoTitulo" id="id_titulo" type="text" />
    <label for="id_docente">Nombre del Docente:</label>
    <input v-model="nuevoDocente" id="id_docente" type="text" />
    <label for="id_creditos">N° Créditos:</label>
    <input v-model="nuevoCreditos" id="id_creditos" type="number" />
    <label for="id_horas">Horas/Semana:</label>
    <input v-model="nuevoHoras" id="id_horas" type="number" />

    <button v-on:click="agregarAsignatura()">Agregar</button>

    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Título</th>
          <th>Docente</th>
          <th>Créditos</th>
          <th>Horas/Semana</th>
          <th>Botón</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ codigo, titulo, docente, creditos, horas } in lista"
          :key="codigo"
        >
          <td>{{ codigo }}</td>
          <td>{{ titulo }}</td>
          <td>{{ docente }}</td>
          <td>{{ creditos }}</td>
          <td>{{ horas }}</td>
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
      nuevoCodigo: "",
      nuevoTitulo: "",
      nuevoDocente: "",
      nuevoCreditos: "",
      nuevoHoras: "",
      lista: [
        {
          codigo: "MAT101",
          titulo: "Matemáticas Básicas",
          docente: "Dra. Ana Torres",
          creditos: 4,
          horas: 5,
        },
        {
          codigo: "FIS201",
          titulo: "Física General",
          docente: "Ing. Carlos Pérez",
          creditos: 3,
          horas: 4,
        },
        {
          codigo: "PRO301",
          titulo: "Programación Web",
          docente: "Msc. Laura Gómez",
          creditos: 5,
          horas: 6,
        },
      ],
      mostrar: false,
    };
  },
  methods: {
    agregarAsignatura() {
      const nueva = {
        codigo: this.nuevoCodigo,
        titulo: this.nuevoTitulo,
        docente: this.nuevoDocente,
        creditos: this.nuevoCreditos,
        horas: this.nuevoHoras,
      };
      this.lista.unshift(nueva);
      this.mostrar = true;
      // Limpiar campos
      this.nuevoCodigo = "";
      this.nuevoTitulo = "";
      this.nuevoDocente = "";
      this.nuevoCreditos = "";
      this.nuevoHoras = "";
      setTimeout(() => {
        this.mostrar = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.container {
  background: #f4f8fb;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.13);
  max-width: 1100px;
  margin: 40px auto;
  padding: 36px 32px;
  font-family: 'Segoe UI', Arial, sans-serif;
}

label {
  display: block;
  margin-top: 18px;
  font-weight: 600;
  color: #1a237e;
  letter-spacing: 1px;
  text-align: left;
}

input[type="text"],
input[type="number"],
input[type="email"] {
  width: 100%;
  padding: 10px 14px;
  margin-top: 6px;
  border: 1.5px solid #90caf9;
  border-radius: 8px;
  font-size: 1rem;
  background: #e3f2fd;
  color: #0d1333;
  margin-bottom: 12px;
  transition: border 0.2s;
}

input:focus {
  border: 1.5px solid #1976d2;
  outline: none;
  background: #fff;
}

button {
  margin-top: 22px;
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
  transition: background 0.2s, transform 0.1s;
}

button:hover {
  background: linear-gradient(90deg, #1565c0 60%, #64b5f6 100%);
  transform: translateY(-2px) scale(1.02);
}

table {
  width: 100%;
  margin-top: 40px;
  border-collapse: separate;
  border-spacing: 0 12px;
}

th {
  background: #1976d2;
  color: #fff;
  padding: 14px;
  border-radius: 8px 8px 0 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
}

td {
  background: #fff;
  padding: 15px;
  border-radius: 0 0 8px 8px;
  color: #333;
  font-size: 17px;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.06);
}

tr {
  transition: box-shadow 0.2s;
}

tr:hover td {
  background: #e3f2fd;
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.13);
}

h1 {
  color: #1976d2;
  text-align: center;
  margin-bottom: 18px;
  font-size: 1.7rem;
  letter-spacing: 1px;
  font-weight: bold;
  background: #e3f2fd;
  border-radius: 8px;
  padding: 12px 0;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
}
</style>