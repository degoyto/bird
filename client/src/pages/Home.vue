<template>
    <div id="home">
        
        <vueHeadful title="Bird - Home"/>
        
        <div style="height:175px;"/>   
        <destaque Nome="APLICATIVOS" Cor="light" Ident="a1" :lista="listaAplicativos" ></destaque>
        <destaque Nome="SPRITES" Cor="dark" Ident="a2"></destaque>
        <destaque Nome="SONS" Cor="light" Ident="a3"></destaque>

        <Header style="position: fixed;top:0px;"></Header>
        
    </div>

</template>

<script>

import Header from "../components/Header2.vue";
import Destaque from "../components/Destaque.vue";
import vueHeadful from "vue-headful";

import { aplicativos } from "../tempData"

export default {
    name: 'home',
    components: {
        Header,
        Destaque,
        vueHeadful
    },
    data: function () {
         return {
            listaAplicativos:aplicativos
         }
     }
}

</script>

<style scoped>
#home{
  margin-top:0px;
}
</style>
