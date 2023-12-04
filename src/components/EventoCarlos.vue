<template>
    <div class="container">
        <div class="container-logo">
            <div class="logoInicio">
                <v-img :width="300" aspect-ratio="16/9" cover :src="imagenTitulo"></v-img>
            </div>
        </div>
        <div class="containerBoleto">
            <div class="cabecera">
                <h3>Boleto normal</h3>
            </div>
            <div class="seccion">
                <h6>Sección</h6>
                <h6>Fila</h6>
                <h6>Asiento</h6>
            </div>
            <div class="seleccion">
                <select v-model="seccion">
                    <option disabled value="">Please select one</option>
                    <option>General</option>
                    <option>Premium</option>
                    <option>VIP</option>
                </select>
                <select v-model="fila">
                    <option disabled value="">Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <select v-model="asiento">
                    <option disabled value="">Please select one</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="precio">
                <p style="font-size: 24px;">{{ precioFormateado }}</p>
            </div>
            <div class="BTcomprar" >
            <v-container class="text-center">
            <v-row justify="center">
            <v-col>
                <v-btn block rounded="xl" size="x-large" to="/Confirmar">Comprar Boleto</v-btn>
            </v-col>
            </v-row>
            </v-container>
            </div>
        </div>
    </div>
</template>
<script setup>
import imagenTitulo from "../assets/titulo.png"
import { ref, watch } from 'vue';
const seccion = ref('');
    const fila = ref('');
    const asiento = ref('');
    const precioFormateado = ref('$0.00');

    // Función para generar un número aleatorio si todos los selectores tienen valor
    const generarNumeroAleatorio = () => {
        if (seccion.value && fila.value && asiento.value) {
            const numeroAleatorio = (Math.random() * 100).toFixed(2); // Generar número aleatorio con 2 decimales
            console.log(numeroAleatorio)
            precioFormateado.value = `$${numeroAleatorio}`; // Formatear como precio y actualizar la variable
        } else {
            precioFormateado.value = '$0.00'; // Si no hay valores, mostrar $0.00
            console.log(precioFormateado)
        }
    };

    // Watchers para vigilar los cambios en los selectores
    watch([seccion, fila, asiento], () => {
        generarNumeroAleatorio();
        return { seccion, fila, asiento, precioFormateado };
    });

    
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
    display: block; /* Para usar flexbox */
    justify-content: center; /* Centrar horizontalmente */
    width: 100%;
    height: 10%;
    border-bottom: 1px solid #ccc;
}
.seccion{
    display: flex; /* Para usar flexbox */
    justify-content: center; /* Centrar horizontalmente */
    justify-content: space-around; /* Distribuye los elementos horizontalmente */
    align-items: center; 
    width: 100%;
    height: 10%;
    border-bottom: 1px solid #ccc;
}
.seccion h6{
    text-align: center;
    color: #2273E4;
    font-size: 18px;
    padding: 0 30px; /* Espacio entre los elementos */
    margin: 0;
    padding-right: 30px; /* Agrega espacio entre el texto y el borde derecho */
}
.seleccion{
    padding: 1px;
    display: flex; /* Para usar flexbox */
    justify-content: center; /* Centrar horizontalmente */
    justify-content: space-around; /* Distribuye los elementos horizontalmente */
    align-items: center; 
}
select {
    width: 110px; /* Ajusta el ancho según tu diseño */
    border: 1px solid #7e7e7e;
    font-size: 16px;
    border-radius: 4px;
}
.precio{
    padding: 5px;
    width: 100%;
    height: 50%;
    display: flex; /* Para usar flexbox */
    justify-content: center; /* Centrar horizontalmente */
    justify-content: space-around; /* Distribuye los elementos horizontalmente */
    align-items: center; 
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    font-size: 40px;
}
.BTcomprar{
    position: absolute;
    left: 36vw;
    top: 80vh;
    width: 344px;
    height: 50px;
}
a{
    background-color: #19A61F;
    color:white;
    font-size: 24px;
}
</style>