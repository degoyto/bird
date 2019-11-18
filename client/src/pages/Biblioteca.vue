<template>
    <div class="Biblioteca">
        <vueHeadful title="Bird - Biblioteca" />
        <Header/>
        <Asset ident="a1" cor="light" titulo="Quadrados coloridos" autor="Jefferson jales" contato="jj@gmail.com"
        descricao="varios quadrados coloridinhos varios quadrados coloridinhos varios quadrados coloridinhos varios quadrados coloridinhos varios quadrados coloridinhos varios quadrados coloridinhos varios quadrados coloridinhos varios quadrados coloridinhos varios quadrados coloridinhos" 
        images="https://via.placeholder.com/100x100/000000?text=Imagem+1, https://via.placeholder.com/100x100/ff0000?text=Imagem+2, https://via.placeholder.com/100x100/0000ff?text=Imagem+3, https://via.placeholder.com/100x100/fff000?text=Imagem+4, https://via.placeholder.com/100x100/008000?text=Imagem+5"/>
        <Asset ident="a2" cor="dark" titulo="Mesma coisa" autor="Vitor Estevam" contato="email@gmail.com"
        descricao="so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente so que diferente"
        images="https://via.placeholder.com/100x100/000000?text=Imagem+1, https://via.placeholder.com/100x100/ff0000?text=Imagem+2, https://via.placeholder.com/100x100/0000ff?text=Imagem+3, https://via.placeholder.com/100x100/fff000?text=Imagem+4, https://via.placeholder.com/100x100/008000?text=Imagem+5"/>
        
    </div>
</template>

<script>
import Header from "../components/Header2.vue";
import vueHeadful from "vue-headful";
import Asset from "../components/Asset.vue";
import Download from "../components/botaoDownload.vue"
export default {
    name:"Biblioteca",
    components:{
        Header,
        vueHeadful,
        Asset,
        Download
    }
}
</script>

<style>

</style>