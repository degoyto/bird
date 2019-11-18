<template>
    <div class="Documentos">
        <vueHeadful title="Bird - Documentos" />
        <Header></Header>
        <Documento titulo="Tiro suave" descricao="tiro baixinho" filtro="true" disciplina="IHC" tipo="ppt"/>
        <Documento titulo="Doendo, mas ta tranquilo" descricao="ta doendo, mas eu supero" disciplina="PROG 1" tipo="doc"/>
        <Documento titulo="Som de chuva para dormir" descricao="bom demais kk" disciplina="ISMD" tipo="pdf"/>
        <Documento titulo="Ela partiu ft. Drake" descricao="tim maia +drake" disciplina="MAMI" tipo="pdf"/>
        <Documento titulo="Música do Belo" descricao="nem tão belo" disciplina="COGNIÇÃO" tipo="doc"/>
    </div>
</template>

<script>


import Header from "../components/Header2.vue";
import vueHeadful from "vue-headful";

import Documento from "../components/Documento.vue";
export default {
    name:'Documentos',
    
    components: {
        Header,
        vueHeadful,
        Documento
    }

}
</script>

<style>

</style>