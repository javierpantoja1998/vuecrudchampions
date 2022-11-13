<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              HOME
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/apuestas">
              Apuestas
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/apostar">
              Nueva Apuesta
            </router-link>
          </li>
          
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FINALISTAS
          </a>
          <ul class="dropdown-menu">
            <li v-for="equipo in equipos" :key="equipo.idEquipo">
                
                <router-link class="dropdown-item" :to="'/equipo/' + equipo.idEquipo ">{{equipo.nombre}}</router-link>
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import ServicesChampions from '@/services/ServicesChampions';
const services = new ServicesChampions;

export default {
    name:"MenuRutas",
    methods:{
        cargarEquipos(){
            services.getEquipos().then(res=>{
                
               this.equipos = res 
            });
        }
    },
    data(){
        return{
            equipos:[]
        }
    },
    mounted(){
        this.cargarEquipos();
    }
}
</script>

<style>

</style>