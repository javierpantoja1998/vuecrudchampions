<template>
    <div>
        <table class="table table-bordered table-info">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Posicion</th>
                    <th>Imagen</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="jugador in jugadores" :key="jugador.idJugador">
                    <th>{{jugador.nombre}}</th>
                    <th>{{jugador.posicion}}</th>
                    <th><img :src="jugador.imagen" style="width: 200px; height: 150px;"/></th>
                    <th>
                        <router-link class="btn btn-info" :to="'/detalles/' + jugador.idJugador ">Detalles</router-link>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
 
</template>

<script>
import ServicesChampions from '@/services/ServicesChampions';
const services = new ServicesChampions;

export default {
    name:"JugadoresComponent",
    methods:{
        loadJugadores(){
            services.getJugadores(this.$route.params.id).then(res=>{
                this.jugadores=res;
            });
        }
    },
    data(){
        return{
            jugadores:[]
        }
    },
    mounted(){
        this.loadJugadores();
    }
}
</script>

<style>

</style>