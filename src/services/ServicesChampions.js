import axios from "axios";
import Global from "@/Global";


export default class ServicesChampions {

    getEquipos(){
        return new Promise(function(resolve){
            var request = "api/equipos";
            var url = Global.urlChampions + request;
            axios.get(url).then(res=>{
                resolve(res.data)
            });
        })
    }

    getEquipo(id){
        return new Promise(function(resolve){
            var request = "api/equipos/" + id;
            var url = Global.urlChampions + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            });
        });
    }

    getJugadores(id){
        return new Promise(function(resolve){
            var request = "api/jugadores/jugadoresEquipo/" + id;
            var url = Global.urlChampions + request;
            axios.get(url).then(res=>{
                console.log(res)
                resolve(res.data)
            });
        });
    }
    getJugadorDetalles(id){
        return new Promise(function(resolve){
            var request = "api/jugadores/" + id;
            var url = Global.urlChampions + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            });
        })
    }

    getApuestas(){
        return new Promise(function(resolve){
            var request = "api/apuestas";
            var url = Global.urlChampions + request;
            axios.get(url).then(res=>{
                resolve(res.data)
            });
        });
    }

    insertApuesta(apuesta){
        return new Promise(function(resolve){
            var request = "api/Apuestas";
            var url = Global.urlChampions + request;
            axios.post(url,apuesta).then(res=>{
                resolve(res.data);
            });
        });
    }

    updateApuesta(apuesta){
        return new Promise(function(resolve){
            var request = "api/Apuestas";
            var url = Global.urlChampions + request;
            axios.put(url,apuesta).then(res=>{
                resolve(res)
            });
        });
    }

    eliminarApuesta(id){
        return new Promise(function(resolve){
            var request = "/api/Apuestas/" +id;
            var url = Global.urlChampions + request;
            axios.delete(url).then(res=>{
                resolve(res);
            });
        });
    }
}
