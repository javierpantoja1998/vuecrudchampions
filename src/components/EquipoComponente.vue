<template>
  <div>
    <h1>{{equipo.nombre}}</h1>
    <img :src="equipo.imagen" style="width: 500px; height:500px"/><BR></BR>
    <router-link class="btn btn-info" :to="'/jugadores/' + equipo.idEquipo">JUGADORES</router-link>

  </div>
</template>

<script>
import ServicesChampions from './../services/ServicesChampions';
const services = new ServicesChampions;

export default {
    name:"EquipoComponente",
    methods:{
        loadEquipo(){
            services.getEquipo(this.$route.params.id).then(res=>{
                this.equipo=res
            });
        }
    },
    data(){
        return{
            equipo:{}
        }
    },
    mounted(){
        this.loadEquipo();
    },
    watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadEquipo();
      }
    },
  },
}
</script>

<style>

</style>