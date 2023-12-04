<template>
    <div>
        <div class="logoInicio">
            <v-img :width="300" aspect-ratio="16/9" cover :src="imagenTitulo"></v-img>
        </div>
        <div class="datosRegistro">
            <form @submit.prevent="registrarUsuario">
            <div class="form-group">
                <input type="email" id="email" v-model="email" placeholder="Usuario" required>
            </div>
            <div class="form-group">
                <input type="password" id="password" v-model="password" placeholder="Contraseña" required>
            </div>
            <button type="submit" class="custom-button">Registrarse</button>
        </form>
        </div>
    </div>
</template>
<script setup>
    import imagenTitulo from "../assets/titulo.png"
</script>
<script>
import usuarios from '../assets/usuarios.json'; // Importa el archivo JSON de usuarios

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
    registrarUsuario() {
        const nuevoUsuario = {
            id: usuarios.length + 1, // Asigna un nuevo ID
            email: this.email,
            password: this.password
        };
        usuarios.push(nuevoUsuario); // Agrega el nuevo usuario al array de usuarios
        // Aquí puedes guardar los datos en un servidor o en una base de datos

        // Puedes redirigir a la página de inicio de sesión después del registro exitoso
        this.$router.push('/login');
    }
    }
};
</script>

<style>
.logoInicio {
    position: absolute;
    left: 40vw;
    top: 20vh;
    width: 492.21px;
    height: 135px;
}
.datosRegistro{
    margin: 0 auto;
    font-family: Arial, sans-serif;
    position: absolute;
    left: 35vw;
    top: 40vh;
    width: 422px;
    height: 329px;
}
.form-group {
    margin-bottom: 15px;
    background-color: #ffffff;
    color: white;
    border: none;
}

input[type="email"],
input[type="password"]{
    background-color: #ffffff;
    color: black;
    height: 40px;
    width: 100%;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    text-align: center;
    
}
.custom-button {
    background-color: #F4DE12;
    color: white;
    top: 80vh;
    font-size: 24px;
    width: 100%; /* Para ocupar el ancho del contenedor */
    height: 100%; /* Para ocupar la altura del contenedor */
    border: none; /* Para eliminar el borde del botón */
    cursor: pointer; /* Cambiar cursor al pasar por encima */
    border-radius: 8px; /* Ajustar el radio de los bordes */
}
.custom-button:hover{
    background-color: #e4cf16;
}
</style>
