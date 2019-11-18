<template>
<div class="ItemDestaque">
    <div id="fundo" :class="Cor">

        <img id="detalhes-image" :src="imagemprop" />

        <div id="detalhes-text">
            <ul id="tags" class="list-group list-group-horizontal">
                    <li  class="list-group-item" v-for='tag in objeto.tags' v-bind:key='tag.id' >
                        <p id="tag">{{tag}}</p>
                    </li>
            </ul>
            
            <p id="titulo">{{tituloprop}}</p>
            <p id="descricao">{{descricaoprop}}</p>
            <p id="autor">Autor: {{autorprop}}<br />Contato: {{contatoprop}} (opcional)</p>
        </div>

        <Download style="position:absolute;left: 1052px;top: 170px;" />
    </div>
</div>
    
    
</template>

<script>

import Download from "./botaoDownload.vue"
export default {
    name: "ItemDestaque",
    props: ["Cor","objeto"],
    components: {
        Download
    },
    data:function() {
        return {
        tituloprop:this.objeto.titulo,
        descricaoprop:this.objeto.descricao,
        autorprop:this.objeto.autor,
        contatoprop:this.objeto.contato,
        imagemprop:this.objeto.imagens,
        }
    }
};
</script>

<style scoped>


.ItemDestaque{
    position:relative;
    height: 317px;
    width:100%;
}
#fundo{
    width:100%;
    height:100%;
}
#detalhes {
    width: 1439px;
    height: 303px;
}
#detalhes-image{
    border: 1px solid grey;
    position: absolute;
    width: 414px;
    height: 282px;
    left: 132px;  
    top:14px;

    background: #C4C4C4;
}
#detalhes-text{
    text-align: left;
    top:17px;
}
#titulo{
    position: absolute;
width: 273px;
height: 28px;
left: 594px;
top: 14px;

font-family: Roboto;
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
top: 92px;

font-family: Roboto;
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
top: 173px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;

}

.dark {
    background: #888787;
}

.light{
    background: #DFDFDF;
}

#tags{
    position:absolute;
    left:594px;
    top:43px;
}
#tags li{
    width:auto;
    height:auto;
    padding:0px;
    border:0px;
    margin-right:4px;
}
#tag{
        font-size: 20px;
        text-align: center;
        background: #C4C4C4;
        border-left: 5px solid #C4C4C4;
        border-right:5px solid #C4C4C4;
        color: #4590D6;
        width:auto;
        height:auto;
        margin:0px;
    }


</style>