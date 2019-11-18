<template>
    <div id="visualizador">
        <img :src="imagesjs[0]" class="principal"  v-bind:id="ident"/>
        <ul id="lista" class="list-group list-group-horizontal">
        <li id="item" class="list-group-item"  v-for="image in imagesjs" v-bind:key="image">
            <button v-on:click="mudaImagem(image)" >
                <img :src="image" alt="">
            </button>
            
        </li>
        </ul>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
export default {
    name:"visualizador",
    props:["images","ident"],
    data: function() {
        return {
            imagesjs:this.images.split(",")
        }
    },
    methods:{
        mudaImagem(src) {
            document.getElementById(this.ident).src=src;
            
        }
    },
    
}
</script>

<style>
.visualizador{
    position:relative;
    width: 378px;
    height: 257px;
    
}
.principal{
    position: relative;
width: 378px;
height: 257px;
left: 0px;
top: 0px;

background-color: blue;
}
#lista{
    position:relative;
    margin-top: 10px;
}
#lista li{
    border-radius: 0px;
}
#lista li button{
    width:100%;
    height:100%;
    background-color: transparent;
    padding:0px;
    border: 0px;
}
#lista li button img{
    width:100%;
    height:100%;
    
}
#item{
    padding:0px;
    margin-right: 10px;
    width: 68px;
height: 46px;
background-color: blue;
}

</style>