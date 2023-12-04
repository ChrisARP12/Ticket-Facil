<template>
    <div class="container">
        <div class="container-logo">
            <div class="logoInicio">
                <v-img :width="300" aspect-ratio="16/9" cover :src="imagenTitulo"></v-img>
            </div>
        </div>
        <div class="containerBoleto">
            <div class="cabecera">
                <div class="iconoLogo">
                    <v-img :width="300" aspect-ratio="16/9" cover :src="iconoLogo" class="shadow"></v-img>
                </div>
            </div>
            <div class="precio">
                <p style="font-size: 24px;">¡Gracias por su compra!</p>
            </div>
            <div class="BTcomprar" >
            <v-container class="text-center">
            <v-row justify="center">
            <v-col>
                <v-btn block color="green" dark rounded="xl" size="x-large"  @click="descargarPDF">Descargar boleto en PDF</v-btn>
            </v-col>
            </v-row>
            </v-container>
            </div>
        </div>
    </div>
</template>
<script setup>
import imagenTitulo from "../assets/titulo.png"
import iconoLogo from "../assets/iconoLogo.png"  
</script>
<script>
import jsPDF from 'jspdf';

export default {
    methods: {
        descargarPDF() {
        // Lógica para generar el PDF con los datos necesarios usando jsPDF
        const doc = new jsPDF();
        doc.text('Compra con Ticket Facil\nEvento\nPrecio:$50.00\n\n¡Gracias por su compra!', 10, 10); // Aquí agregarías los datos al PDF
        doc.save('boleto.pdf'); // Descargar el PDF con un nombre específico

        // Esperar unos segundos antes de redireccionar a /Menu
        setTimeout(() => {
            this.$router.push('/Menu'); // Redireccionar a /Menu
        }, 2000); // Tiempo de espera en milisegundos (en este caso, 5 segundos)
        },
    },
};
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.container{
    margin: 0 auto;
    font-family: Arial, sans-serif;
    left: 35vw;
    top: 40vh;
    width: 400px;
    height: 600px;
}
.container-logo{
    left: 35vw;
    top: 40vh;
    background-color: #3594EB;
    width: 100%;
    height: 17%;
    border: none;
    border-top-left-radius: 8px; /* Redondear esquina superior izquierda */
    border-top-right-radius: 8px;
}
.logoInicio {
    width: 300px; /* Ajusta el ancho al contenedor */
    height: 100px; /* Ajusta la altura al contenedor */
    display: flex; /* Para usar flexbox */
    align-items: center; /* Centrar verticalmente */
    justify-content: center; /* Centrar horizontalmente */
    left:39%;
    top:auto;
}
.containerBoleto{
    background-color: #ffffff;
    width: 100%;
    height: 85%;
    border-bottom-left-radius: 8px; /* Redondear esquina superior izquierda */
    border-bottom-right-radius: 8px;
    display: flex; /* Para usar flexbox */
    flex-direction: column;
}
.cabecera{
    display: flex; /* Para usar flexbox */
    justify-content: center; /* Centrar horizontalmente */
    justify-content: space-around; /* Distribuye los elementos horizontalmente */
    width: 100%;
    padding: 50px;
}
.iconoLogo{
    display: flex; /* Para usar flexbox */
    align-items: center; /* Centrar verticalmente */
    justify-content: center; /* Centrar horizontalmente */
}
.precio{
    display: flex; /* Para usar flexbox */
    justify-content: center; /* Centrar horizontalmente */
    justify-content: space-around; /* Distribuye los elementos horizontalmente */
    font-size: 40px;
}
.BTcomprar{
    position: absolute;
    left: 36vw;
    top: 80vh;
    width: 344px;
    height: 50px;
}
.BTcomprar v-btn {
    background-color: #19A61F !important;
    color: white !important;
    font-size: 19px !important;
}
</style>