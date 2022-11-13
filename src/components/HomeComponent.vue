<template>
  <div>
    <h1>LA CASA DEL FUTBOL</h1>
    <h2 v-for="equipo in equipos" :key="equipo.idEquipo">
        {{equipo.nombre}}
    </h2>
    <img v-for="equipo in equipos" :key="equipo.idEquipo" :src="equipo.imagen" style="height:100px; width:100px"/>
  </div>
</template>

<script>
import ServicesChampions from '@/services/ServicesChampions';
const services = new ServicesChampions;


export default {
    name:"HomeComponent",
    methods:{
        loadEquipos(){
            services.getEquipos().then(res=>{
                this.equipos=res
            });
        }
    },
    data(){
        return{
            equipos:[]
        }
    },

    mounted(){
        this.loadEquipos();
    }

}
</script>

<style>

</style>