<template>
    <div class="sons">
        <vueHeadful title="Bird - Sons" />
        <Header></Header>
        <div id="filtro">
            <p id="tituloPagina"> SONS</p>
            <div id="divisao"></div>
            <div class="filtros">
                <select>
                    <option>Titulo</option>
                </select>
            </div>
            <div class="filtro">
                <p>Filtro:</p>
            </div>
        </div>
        <ul class="list-group list-group-vertical">
            <li class="list-group-item" style="padding:0px;" v-for='item in listaDeItens' v-bind:key='item.id'>
                <som id="destaque" :objeto="item" cor="light"></som>
            </li>
        </ul>
    </div>
</template>

<script>


import Header from "../components/Header2.vue";
import vueHeadful from "vue-headful";
import Som from "../components/Som.vue";

import { sons } from "../tempData" 
export default {
    name:'Sons',
    
    components: {
        Header,
        vueHeadful,
        Som
    },
    data: function () {
         return {
            listaDeItens:sons,
         }
     }

}
</script>

<style>
.sons{
    width:1439px;
}
#filtro{
    position: relative;
    width: 1440px;
    height: 86px;
    left: 0px;
    top: 0px;
    background-color:#DFDFDF;;
}
#tituloPagina{
    position:absolute;
    width: 173px;
    height: 50px;
    left: 50px;
    top: 25px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 35px;
}
#divisao{
    position: absolute;
width: 282px;
height: 0px;
left: 44px;
top: 62px;

border: 1px solid #000000;
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
</style>