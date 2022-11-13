<template>
    <div>
      <h1>¿ESTÁ SEGURO DE QUE DESEA BORRAR LA APUESTA?</h1>
      
    </div>
    <button class="btn btn-danger" @click="probarAlert()">ELIMINAR</button>
  </template>
  <script>
  // ES6 Modules or TypeScript
  import ServicesChampions from '@/services/ServicesChampions';
const services = new ServicesChampions;

  import Swal from 'sweetalert2';
  export default {
    name: "ELIMINAR APUESTA",
    methods: {
      probarAlert() {
        Swal.fire({
          title: "Estas seguro?",
          text: "No podrás volver atrás!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirmar",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "BORRADO!", 
            "La apuesta fue eliminada correctamente.",
             "Exito");
             this.probSaray();
          }
        });
      },
      probSaray(){
        //Definimos el id y lo recogemos por su parametro definido en la ruta
        var id = this.$route.params.id;
        services.eliminarApuesta(id).then(res=>{
            console.log(res)
            //Lo redirijimos a la pagina principal
            this.$router.push("/apuestas");
        })
      }
    },
  };
  </script>
  <style></style>