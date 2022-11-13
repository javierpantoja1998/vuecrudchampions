<template>
  <div>
    <h1>Detalles</h1>
    <h1 style="color:cornflowerblue">
        {{jugador.nombre}}
    </h1>
    <img :src="jugador.imagen" style="height:200px; width:200px"/>
    <h1 style="color:cornflowerblue">
        {{jugador.posicion}}
    </h1>
    <h1 style="color:cornflowerblue">
        {{jugador.fechaNacimiento}}
    </h1>
    <h1 style="color:cornflowerblue">
        {{jugador.pais}}
    </h1>
    <router-link class="btn btn-info" :to="'/jugadores/' + jugador.idEquipo">Volver</router-link>
  </div>
</template>

<script>
import ServicesChampions from '@/services/ServicesChampions';
const services = new ServicesChampions;

export default {
    name:"DetallesComponent",
    methods:{
        loadJugadores(){
            services.getJugadorDetalles(this.$route.params.id).then(res=>{
                this.jugador=res;
            });
        }
    },
    data(){
        return{
            jugador:{}
        }
    },
    mounted(){
        this.loadJugadores();
    }
}
</script>

<style>

</style>