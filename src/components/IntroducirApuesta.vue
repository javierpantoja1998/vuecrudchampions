<template>
  <div>
    <h1>HACER APUESTA</h1>
    <form method="post" class="form form-success" v-on:submit.prevent="insertarApuesta()">
        <label>Usuario:</label>
        <input type="text" v-model="apuesta.usuario" class="form-control"/>
        <label>Resultado:</label>
        <input type="text" v-model="apuesta.resultado" class="form-control"/>
        <label>Fecha:</label>
        <input type="date" v-model="apuesta.fecha" class="form-control"/>
        <button class="btn btn-primary">Apostar</button>
    </form>
  </div>
</template>

<script>
import ServicesChampions from '@/services/ServicesChampions';
const services = new ServicesChampions;

export default {
    name:"IntroducirApuesta",

    methods:{
        insertarApuesta(){
            services.insertApuesta(this.apuesta).then(res=>{
                this.$router.push("/apuestas");
                console.log(res)
            });
        }
    },

    data(){
        return{
            apuesta:{
                idApuesta:0,
                usuario:"",
                resultado:"",
                fecha:""
            },
        }
    },

    mounted(){

    }

}
</script>

<style>

</style>