<template>
    <div class="logoInicio">
        <v-img :width="300" aspect-ratio="16/9" cover :src="imagenTitulo"></v-img>
    </div>
    <div class="datosLogin">
    <form @submit.prevent="iniciarSesion">
        <div class="form-group">
            <input type="email" id="email" v-model="formData.email" placeholder="Usuario" required>
        </div>
        <div class="form-group">
            <input type="password" id="password" v-model="formData.password" placeholder="Contraseña" required>
        </div>
        <button type="submit" class="custom-button">Iniciar Sesión</button>
        <router-link to="/registro" class="custom-button-registro">Registro</router-link>
    </form>
        <p v-if="mensajeError" style="color: red;">{{ mensajeError }}</p>
    </div>
</template>
<script setup>
    import imagenTitulo from "../assets/titulo.png"
</script>
<script>
import usuarios from '../assets/usuarios.json';

export default {
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        iniciarSesion() {
        const usuarioEncontrado = usuarios.find(
            usuario => usuario.email === this.formData.email && usuario.password === this.formData.password
        )
        // Validación simple de credenciales (simulación) this.formData.email === 'usuario@example.com' && this.formData.password === 'password'
        if (usuarioEncontrado) {
          // Inicio de sesión exitoso (simulación)
            this.mensajeError = '';
          // Redirigir a la página de dashboard después del inicio de sesión exitoso
            this.$router.push('/Menu');
        } else {
          // Mostrar mensaje de error si las credenciales son incorrectas
            this.mensajeError = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        }
    }
    }
};
</script>
    
<style scoped>
.logoInicio {
    position: absolute;
    left: 40vw;
    top: 20vh;
    width: 492.21px;
    height: 135px;
}
.datosLogin{
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
.custom-button-registro{
    background-color: #3594EB;
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    margin-top: 10px;
    top: 80vh;
    font-size: 24px;
    width: 100%; /* Para ocupar el ancho del contenedor */
    height: 100%; /* Para ocupar la altura del contenedor */
    border: none; /* Para eliminar el borde del botón */
    cursor: pointer; /* Cambiar cursor al pasar por encima */
    border-radius: 8px; /* Ajustar el radio de los bordes */
}
.custom-button-registro:hover{
    background-color: #3184d1;
}
</style>