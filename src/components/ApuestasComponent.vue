<template>
  <div>
    <h1>APUESTAS</h1>
    <table class="table table-bordered table-success">
        <thead>
            <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Resultado</th>
                <th>Fecha</th>
                <th>Modificar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="apuesta in apuestas" :key="apuesta.idApuesta">
                <td>{{apuesta.idApuesta}}</td>
                <td>{{apuesta.usuario}}</td>
                <td>{{apuesta.resultado}}</td>
                <td>{{apuesta.fecha}}</td>
                <td>
                    <router-link class="btn btn-info" aria-current="page" :to="'/modificar/' + apuesta.idApuesta">
                        Modificar
                    </router-link>
                </td>
                <td>
                    <router-link :to="'/eliminar/' + apuesta.idApuesta  "  class="btn btn-danger">ELIMINAR</router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServicesChampions from '@/services/ServicesChampions';
const services = new ServicesChampions;

export default {
    name:"ApuestasComponent",

    methods:{
        loadApuestas(){
            services.getApuestas().then(res=>{
                console.log(res)
                this.apuestas=res
            });
        }
    },

    data(){
        return{
            apuestas:[]
        }
    },
    mounted(){
        this.loadApuestas();
    }
}
</script>

<style>

</style>