<template>
    <div>
        <Header/>
        <h1> titulo={{titulo}}<br/>
            descrição={{descricao}}<br/>
            autor={{autor}}            
        </h1>
    </div>

  
</template>

<script>
import Header from "../components/Header2.vue"
import { aplicativos } from "../tempData"

export default {
    name: "paginadoprojeto",
    components: {
        Header
    },
    data: function () {
         return {
            titulo: aplicativos[0].titulo,
            descricao:aplicativos[0].descricao,
            autor:aplicativos[0].autor
         }
     }
}
</script>

<style>

</style>