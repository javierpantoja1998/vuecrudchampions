<template>
  <div>
    <h1>MODIFICAR APUESTA</h1>
    <div v-if="apuesta">
        <form method="POST" v-on:submit.prevent="modificarApuesta()">
            <label>ID:</label>
            <input type="number" v-model="apuesta.idApuesta" class="form-control" /><br/>
            <label>USUARIO:</label>
            <input type="text" v-model="apuesta.usuario" class="form-control"/>
            <label>Resultado:</label>
            <input type="text" v-model="apuesta.resultado" class="form-control"/>
            <label>FECHA:</label>
            <input type="date" v-model="apuesta.fecha" class="form-control"/>
            <button class="btn btn-info">Modificar</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServicesChampions from '@/services/ServicesChampions';
const services = new ServicesChampions;

export default {
    name:"ModificarApuesta",

    methods:{
        modificarApuesta(){
            services.updateApuesta(this.apuesta).then(res=>{
                console.log(res)
                this.$router.push('/apuestas');
            });
        }
    },

    data(){
        return{
            apuesta:{},
            idApuesta:0,
            // usuario:"",
            // resultado:"",
            // fecha:""
        }
    },
    
}
</script>

<style>

</style>