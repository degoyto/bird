<template>
    <div id="Bird - Projeto" class="main">
        <vueHeadful title="Bird - projetos" />
        <Header />
        <div name="filtro e nome da pagina" style=" position: relative;height:73px; background: #DFDFDF;">
            <div class="filtro">
                <p>Filtro:</p>
            </div>
            <p class="projetos">PROJETOS - {{selecao}}</p>
            <div class="borda">
            </div>
            <div class="filtros">
                <select id="myFilter" onchange="window.location='http://localhost:8080/projetos/'+this.value">
                    <option value=""> Geral </option>
                    <option value="jogos"> Jogos</option>
                    <option value="aplicativos">Aplicativos</option>
                    <option value="infograficos">Infográficos</option>
                </select>
            </div>
        </div>


        <ul class="list-group list-group-vertical">
            <li class="list-group-item" style="padding:0px;" v-for='item in listaDeItens' v-bind:key='item.id'>
                <itemDestaque id="destaque" :objeto="item" cor="light"></itemDestaque>
            </li>
        </ul>
    </div>
</template>

<script>
import Header from "../components/Header2.vue"
import vueHeadful from "vue-headful";

import "bootstrap/dist/css/bootstrap.css"

import itemDestaque from "../components/ItemDestaque.vue"

import { aplicativos } from "../tempData" 

export default {
    name: 'pageProjeto',
    components: {
        Header,
        vueHeadful,
        itemDestaque,
    },
    props:["selecao"],
    data: function () {
         return {
            listaDeItens:aplicativos
         }
     }
};
</script>

<style scoped>
.main{
    width:1439px;
}
#teste {
    position: absolute;
    top: 0;
    left: 0;
}

#projeto {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}

.linha {
    display: inline;
    position: absolute;
    top:100px;
    left:100px;
}
.filtros{
    position:absolute;
    left: 1153px;
    top: 28px;
    width: 175px;
    height: 45px;
}
.filtros select {
    font-family: Roboto;    
    width: 175px;
    height: 45px;
    }
    .filtro{
    position: absolute;
width: 80px;
height: 29px;
left: 1073px;
top: 37px;
}
.filtro p {
    


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 26px;
line-height: 30px;

color: #000000;

}

.projetos {
    width:400px;
    position: absolute;
   left: 74px;
top: 16px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 35px;

color: #000000;

}

.borda {
    position: absolute;
width: 237px;
height: 0px;
left: 68px;
top: 53px;

border: 1px solid #000000;
}
</style>
