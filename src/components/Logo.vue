<template>
    <div class="logoInicio">
        <v-img :width="300" aspect-ratio="16/9" cover :src="imagenTitulo"></v-img>
    </div>
    <div class="iconoInicio">
        <v-img :width="300" aspect-ratio="16/9" cover :src="iconotitulo"></v-img>
    </div>
    <div class="BTinicio" >
    <v-container class="text-center">
    <v-row justify="center">
      <v-col  >
        <v-btn block rounded="xl" size="x-large" to="/Login">Inicio</v-btn>
      </v-col>
    </v-row>
    </v-container>
    </div>
</template>

<script setup>
import imagenTitulo from "../assets/titulo.png"
import iconotitulo from "../assets/iconoLogo.png"
</script>

<style scoped>
.logoInicio {
  position: absolute;
  left: 35vw;
  top: 25vh;
  width: 492.21px;
  height: 135px;
}

.iconoInicio{
  position: absolute;
  left: 35vw;
  top: 40vh;
  width: 422px;
  height: 329px;
}

.BTinicio{
  position: absolute;
  left: 33vw;
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