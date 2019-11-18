<template>
    <div class="Destaque2" :id="Ident">    
        <div id="fundoDestaque" :class="Cor">
            <div name="titulo">
                <p id="nome">{{Nome}}</p>
                <div id="linha">
                </div>
            </div>
            <div name="janelas">
                <ul id="janelas" class="list-group list-group-horizontal">
                    <li id="item" class="list-group-item" v-for='item in lista' v-bind:key='item.id' >
                        <img :src='item.imagens'/>
                        
                        <button id="janela" type="button" v-on:click="ChangeSize(item)"> </button>
                    </li>
                </ul>
            </div>
            <div name="detalhes" v-if="show" id="detalhes" class="cor">
                <ItemDestaque id="destaque" style="top:-14px;"  :objeto="objetoprop" :cor="Cor" ></ItemDestaque>
            </div>
        </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import ItemDestaque from "./ItemDestaque.vue"

export default {
    name: "Destaque",
    props: ["Nome", "Cor", "Ident","lista"],
    components: {
        ItemDestaque
    },
    data: function() {
        return {
            janelas: ['','','','',''],
            show: false,
            
            objetoprop:"",
            check:'',
            check2:''
        }
    },
    methods: {
        ChangeSize(objeto) {
            
            
            let elemento = this.Ident;
            if (document.getElementById(elemento).className == 'Destaque2') {
                document.getElementById(elemento).className = 'DestaqueBig';
            } else if (document.getElementById(elemento).className == 'DestaqueBig') {
                document.getElementById(elemento).className = 'Destaque2';
            }
            
            this.objetoprop=objeto;
            this.show=!this.show
            
        }
    }

}
</script>

<style scoped>
.light {
    background: #DFDFDF;
}

.light #linha {
    border: 1px solid black;
}

.light #nome,
.light #detalhes-text {
    color: black;
}

.dark {
    background: #888787;
}

.dark #linha {
    border: 1px solid white;
}

.dark #nome,
.dark #detalhes-text {
    color: white;
}

.Destaque2 {
    position: relative;
    margin-top: 0px;
    text-align: center;
    padding: 0px;
    width: 1439px;
    height: 283px;
}

.DestaqueBig {
    position: relative;
    margin-top: 0px;
    text-align: center;
    padding: 0px;
    width: 1439px;
    height: 586px;
}

#linha {
    position: absolute;
    width: 237px;
    height: 0px;
    left: 40px;
    top: 53px;
}

#nome {
    position: absolute;
    width: 100px;
    height: 21px;
    left: 46px;
    top: 28px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
}

#janelas {
    height: 283px;
}

#janelas li {
    width: 256px;
    height: 175px;
    left: 40px;
    top: 72px;
    background: #C4C4C4;
    margin-right: 20px;
}
#janelas img{

    height: 100%;
    width: 100%;
    position:absolute;
    top:0px;
    left:0px;
}
#janela{
    background: rgba(94, 94, 94, 0);
    filter: alpha(opacity=100);
    height: 100%;
    width: 100%;
    position:absolute;
    top:0px;
    left:0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-style: none;
    outline: none;
}
#janela:hover {
    background: rgba(94, 94, 94, 0.05);
}

#janela:active {
    background: rgba(94, 94, 94, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    
}
#item:active{
    transform: translateY(1px);
}


#fundoDestaque {
    position: absolute;
    width: 1439px;
    height: 100%;
    left: 0px;
    top: 0px;
}

#detalhes {
    width: 1439px;
    height: 303px;
}

#detalhes-image {
    position: absolute;
    width: 424px;
    height: 289px;
    left: 132px;
    background: #C4C4C4;
}

#detalhes-text {
    text-align: left;
}

#titulo {
    position: absolute;
    width: 273px;
    height: 28px;
    left: 594px;
    top: 288px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    ;
}

#descricao {
    position: absolute;
    width: 439px;
    height: 63px;
    left: 594px;
    top: 356px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    ;
}

#autor {
    position: absolute;
    width: 349px;
    height: 42px;
    left: 594px;
    top: 461px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    ;
}

#detalhes-button {
    position: absolute;
    width: 205px;
    height: 71px;
    left: 1052px;
    top: 458px;
    border-style: none;
    outline: none;
    background: #FFCD4D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#detalhes-button:hover {
    background: #E9BC47;
}

#detalhes-button:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
}

#detalhes-button p {
    margin-bottom: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
}
</style>