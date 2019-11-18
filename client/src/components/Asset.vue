<template>
    <div class="asset">
      <div id="main">
          <div v-if="cor=='light'" style="width:100%;height:100%;background-color:#DFDFDF;"></div>
          <div v-if="cor=='dark'" style="width:100%;height:100%;background-color:#C5C4C4;;"></div>
          <Visualizador :images="images" :ident="ident"/>
          <div id="detalhes-text">
            <p id="titulo">{{titulo}}</p>
            <p id="descricao">{{descricao}}</p>
            <p id="autor">Autor: {{autor}}<br/>Contato: {{contato}} (opcional)</p>        
        </div>
          <Download style="position:absolute;left: 1071px;top: 308px;"/>
      </div>
    </div>
    
</template>

<script>
import Visualizador from "./visualizadorDeImagens.vue"
import Download from "./botaoDownload.vue"
export default {
    name:"Asset",
    props:["cor","images","titulo","descricao","autor","contato","ident"],
    components:{
        Visualizador,
        Download
    }
}
</script>

<style scoped>
.asset{
    position:relative;
    font-family: Roboto;
}
#main{
width: 1440px;
height: 425px;
}
#visualizador{
    position:absolute;
    left: 67px;
    top: 57px;
}
#detalhes-text{
    text-align: left;
    font-family: Roboto;

}
#titulo{
    position: absolute;
width: 273px;
height: 28px;
left: 594px;
top: 57px;

font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
;
}
#descricao{
    position: absolute;
width: 439px;
height: 63px;
left: 594px;
top: 126px;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
;
}
#autor{
    position: absolute;
width: 349px;
height: 42px;
left: 594px;
top: 332px;


font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
;
}

</style>