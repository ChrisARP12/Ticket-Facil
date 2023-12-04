<template>
  <v-card color="#ffffff" flat height="700px" rounded="0">
    <v-toolbar color="#2273e4" height="100">

    </v-toolbar>
  </v-card>
  <div class="logoInicio">
    <v-img :width="300" aspect-ratio="16/9" cover :src="imagenTitulo"></v-img>
  </div>
  <div class="carlosImg">
    <v-img :width="300" aspect-ratio="16/9" cover :src="Carlos"></v-img>
  </div>
  <div class="BTComprarCarlos" >
    <v-container class="text-center">
    <v-row justify="center">
      <v-col  >
        <v-btn block rounded="xl" size="x-large" to="/Evento">comprar</v-btn>
      </v-col>
    </v-row>
    </v-container>
    </div>
  <div class="badBunnyImg">
    <v-img :width="300" aspect-ratio="16/9" cover :src="badBunny"></v-img>
  </div>
  <div class="BTComprarbad" >
    <v-container class="text-center">
    <v-row justify="center">
      <v-col  >
        <v-btn block rounded="xl" size="x-large" to="/Evento">comprar</v-btn>
      </v-col>
    </v-row>
    </v-container>
    </div>
  <div class="taylorImg">
    <v-img :width="300" aspect-ratio="16/9" cover :src="Taylor"></v-img>
  </div>
  <div class="BTComprarTaylor" >
    <v-container class="text-center">
    <v-row justify="center">
      <v-col  >
        <v-btn block rounded="xl" size="x-large" to="/Evento">comprar</v-btn>
      </v-col>
    </v-row>
    </v-container>
    </div>
    <div class="francoImg">
    <v-img :width="300" aspect-ratio="16/9" cover :src="Franco"></v-img>
  </div>
  <div class="BTComprarFranco" >
    <v-container class="text-center">
    <v-row justify="center">
      <v-col  >
        <v-btn block rounded="xl" size="x-large" to="/Evento">comprar</v-btn>
      </v-col>
    </v-row>
    </v-container>
    </div>
  <div class="pauloImg">
    <v-img :width="300" aspect-ratio="16/9" cover :src="paulo"></v-img>
  </div>
  <div class="BTComprarPaulo" >
    <v-container class="text-center">
    <v-row justify="center">
      <v-col  >
        <v-btn block rounded="xl" size="x-large" to="/Evento">comprar</v-btn>
      </v-col>
    </v-row>
    </v-container>
    </div>
  <div class="drossImg">
    <v-img :width="300" aspect-ratio="16/9" cover :src="Dross"></v-img>
  </div>
  <div class="BTComprarDross" >
    <v-container class="text-center">
    <v-row justify="center">
      <v-col  >
        <v-btn block rounded="xl" size="x-large" to="/Evento">comprar</v-btn>
      </v-col>
    </v-row>
    </v-container>
    </div>
</template>

<script setup>
import imagenTitulo from "../assets/titulo.png"
import Carlos from "../assets/Carlos.png"
import badBunny from "../assets/badBunny.png"
import Taylor from "../assets/Taylor.png"
import Franco from "../assets/Franco.png"
import paulo from "../assets/paulo.png"
import Dross from "../assets/Dross.png"
</script>

<style scoped>
.BTComprarDross{
  position: absolute;
  left: 69vw;
  top: 95vh;
  width: 256px;
  height: 50px;
  
}
a{
   background-color: #1867C0;
   color:white;
  font-size: 24px;
}
.BTComprarPaulo{
  position: absolute;
  left: 37vw;
  top: 95vh;
  width: 256px;
  height: 50px;
  
}
a{
   background-color: #1867C0;
   color:white;
  font-size: 24px;
}
.BTComprarFranco{
  position: absolute;
  left: 3vw;
  top: 95vh;
  width: 256px;
  height: 50px;
  
}
a{
   background-color: #1867C0;
   color:white;
  font-size: 24px;
}
.BTComprarCarlos{
  position: absolute;
  left: 3vw;
  top: 50vh;
  width: 256px;
  height: 50px;
  
}
a{
  background-color: #1867C0;
  color:white;
  font-size: 24px;
}
.BTComprarTaylor{
  position: absolute;
  left: 69vw;
  top: 50vh;
  width: 256px;
  height: 50px;
  
}
a{
  background-color: #1867C0;
  color:white;
  font-size: 24px;
}
.logoInicio {
  position: absolute;
  left: 13px;
  top: 0px;
  width: 412px;
  height: 113px;
  z-index: 100;
}
.BTComprarbad{
  position: absolute;
  left: 37vw;
  top: 50vh;
  width: 256px;
  height: 50px;
  
}
a{
  background-color: #1867C0;
  color:white;
  font-size: 24px;
}
.carlosImg{
  position: absolute;
  left: 3vw;
  top: 20vh;
  width: 256px;
  height: 199px;
}
.badBunnyImg{
  position: absolute;
  left: 37vw;
  top: 20vh;
  width: 256px;
  height: 199px;
}
.taylorImg{
  position: absolute;
  left: 69vw;
  top: 20vh;
  width: 256px;
  height: 199px;
}
.francoImg{
  position: absolute;
  left: 3vw;
  top: 65vh;
  width: 256px;
  height: 199px;
}
.pauloImg{
  position: absolute;
  left: 37vw;
  top: 65vh;
  width: 256px;
  height: 199px;
}
.drossImg{
  position: absolute;
  left: 69vw;
  top: 65vh;
  width: 256px;
  height: 199px;
}
</style>