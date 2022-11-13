import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import EquipoComponente from './components/EquipoComponente.vue'
import JugadoresComponent from './components/JugadoresComponent.vue'
import DetallesComponent from './components/DetallesComponent.vue';
import ApuestasComponent from './components/ApuestasComponent.vue';
import IntroducirApuesta from './components/IntroducirApuesta.vue';
import ModificarApuesta from './components/ModificarApuesta.vue';
import EliminarApuesta from './components/EliminarApuesta.vue';

const routes = [
    {
        path:"/", component:HomeComponent
    },
    {
        path:"/equipo/:id", component:EquipoComponente
    },
    {
        path:"/jugadores/:id", component:JugadoresComponent
    },
    {
        path:"/detalles/:id", component:DetallesComponent
    },
    {
        path:"/apuestas", component:ApuestasComponent
    },
    {
        path:"/apostar", component:IntroducirApuesta
    },
    {
        path:"/modificar/:id", component:ModificarApuesta
    },
    {
        path:"/eliminar/:id", component:EliminarApuesta
    }
    
]   

const router = new createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;