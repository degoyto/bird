<template>
    <div id="quadroMaior" :class="Cor">
        <div class="img">
            <img src="../assets/img.jpg" width=414px height=282px style="border: 1px solid grey;">
        </div>
        <div id="detalhes-text">
            <Tag class="tag"></Tag> 
            <p id="titulo">{{titulo}}</p>
            <p id="descricao">{{descricao}}</p>
            <p id="autor">Autor: {{autor}}<br/>Contato: {{contato}} (opcional)</p>        
        </div>
        <Download style="position:absolute;left: 1071px;top: 308px;"/>
        
    </div>
    
</template>

<script>
import Download from "./botaoDownload.vue"
import Tag from "./Tag.vue"
export default {
    name: "Projeto",
    props: ["Cor","titulo","descricao","autor","contato"],
    components:{Download,Tag}
};
</script>

<style scoped>

#quadroMaior{
    position: relative;
    width: 1439px;
    height: 425px;
    
}

.img{
    position: absolute;
    width: 414px;
    height: 282px;
    left: 68px;
    top: 82px;
    background: #C4C4C4;
}

.tituloRecurso{
    position: absolute;
    font-size: 15px;
    left: 529px;
    top: 58px;
    font-family: Roboto;
}
.infoRecurso{
    position: absolute;
    text-align: left;
    left: 529px;
    top: 153px;
    line-height: 35px;
    font-family: Roboto;
}
.baixar{
    position: absolute;
    width: 205px;
    height: 71px;
    left: 1072px;
    top: 300px;
    background: #FFCD4D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-style: none;
    outline: none;
}
.baixar:hover{
    background: #E9BC47;
}
.baixar:active{
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
}
.baixar p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 24px;
    line-height: 28px;
}

.dark {
    background: #888787;
}

.light{
    background: #DFDFDF;
}

.light .infoRecurso p , .light .tituloRecurso h2{
    color: black;
}
.dark .infoRecurso p , .dark .tituloRecurso h2{
    color: white;
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