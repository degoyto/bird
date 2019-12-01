import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue';
import Projeto from './pages/PageProjeto.vue';
import Sobre from './pages/Sobre.vue';
import Sons from './pages/Sons.vue';
import Enviar from './pages/Enviar.vue';
import Documentos from './pages/Documentos.vue';
import Biblioteca from './pages/Biblioteca.vue';
import EnviarConfirma from './pages/EnviarConfirma.vue';
import PaginaDoProjeto from './pages/PaginaDoProjeto.vue';
import Login from './pages/adm/Login.vue';
import AdmHome from './pages/adm/AdmHome.vue';


Vue.use(Router)


export default new Router({
    routes: [
    {
        path: '/',
        name:"home",
        component: Home
    },
    {
        path: '/projetos',
        component: Projeto
    },
    {
        path: '/projetos/jogos',
        component: Projeto,
        props: { selecao: "Jogos" }
    },
    {
        path: '/projetos/aplicativos',
        component: Projeto,
        props: { selecao: "Aplicativos" }
    },
    {
        path: '/projetos/infograficos',
        component: Projeto,
        props: { selecao: "Infográficos" }
    },
    {
        path: '/sobre',
        component: Sobre
    },
    {
        path: '/sons',
        component: Sons
    },
    {
        path: '/enviar',
        component: Enviar
    },
    {
        path: '/documentos',
        component: Documentos
    },
    {
        path: '/biblioteca',
        component: Biblioteca
    },
    {
        path: '/enviarconfirma',
        name: "enviarconfirma",
        component: EnviarConfirma
    },
    {
        path: '/paginadoprojeto',
        component: PaginaDoProjeto
    },
    {
        path: '/login',
        name:"login",
        component: Login
    },
    {
        path: '/admin',
        name:"admin",
        component: AdmHome
    }
]
}

)