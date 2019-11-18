<template>
    <div class="header">
        <div id="background">
            <div id="logo">
                <img src="../assets/logoBird.png" alt="BIRD" style="height: 100%;   width: 100%;" />
            </div>
            <form action="http://localhost:8080/">
                <button class="botao_grande" id="inicio">
                    Início
                </button>
            </form>
            <div class="dropdown" id="projetos">
                <form action="http://localhost:8080/projetos">
                    <button class="dropbtn botao_grande">Projetos</button>
                </form>
                <div class="dropdown-content">
                    <a class="botao_grande" href="http://localhost:8080/projetos/aplicativos">Aplicativos</a>
                    <a class="botao_grande" href="http://localhost:8080/projetos/infograficos">Infográficos</a>
                    <a class="botao_grande" href="http://localhost:8080/projetos/jogos">Jogos</a>
                </div>
            </div>
            <div class="dropdown" id="biblioteca">
                <form action="http://localhost:8080/biblioteca">
                    <button class="dropbtn botao_grande">Biblioteca</button>
                </form>
                <div class="dropdown-content">
                    <a class="botao_grande" href="#">Sprites 2D</a>
                    <a class="botao_grande" href="#">Modelos 3D</a>
                    <a class="botao_grande" href="http://localhost:8080/documentos">Documentos</a>
                    <a class="botao_grande" href="http://localhost:8080/sons">Sons</a>
                </div>
            </div>
            <button class="botao_grande" id="recentes">
                Recentes
            </button>
            <form action="http://localhost:8080/enviar">
                <button class="botao_grande" id="enviar">Enviar</button>
            </form>
            <form action="http://localhost:8080/sobre">
                <button class="botao_grande" id="sobre">Sobre</button>
            </form>
            <form id="busca">
                <span class="glyphicon glyphicon-search"
                    style="width:20%;height:100%;font-size:20px;position:relative;top:8px;"></span>
                <input type="text" placeholder="pesquisa">
            </form>
        </div>
    </div>


</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
    export default {
        name: "Header2",

    }
</script>

<style scoped>

    .header {
        
        position: relative;
        margin-top: 0px;
        text-align: center;
        padding: 0px;
        width: 1439px;
        height: 175px;
    }

    #background {
        
        position: absolute;
        width: 1439px;
        height: 179px;
        left: 0px;
        top: 0px;
        background: #FFFFFF;
    }

    #logo {
        position: absolute;
        width: 295px;
        height: 145px;
    }


    .botao_grande:hover {
        background: #f2f2f2;
    }

    .botao_grande:active {
        background: #d9d9d9;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        transform: translateY(1px);
    }

    .botao_grande {
        text-align: center;
        font-family: Roboto;
        font-size: 18px;
        line-height: 21px;
        font-style: normal;
        font-weight: normal;

        border-style: none;
        outline: none;
        background: #FFFFFF;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    #inicio {
        position: absolute;
        width: 109px;
        height: 57px;
        left: 346px;
        top: 62px;
    }
    #projetos{
        position: absolute;
        width: 126px;
        height: 57px;
        left: 470px;
        top: 62px;   
    }
    #biblioteca{
        position: absolute;
        width: 118px;
        height: 57px;
        left: 611px;
        top: 62px;
    }
    #recentes{
        position: absolute;
    width: 147px;
    height: 57px;
    left: 744px;
    top: 62px;
    }
    #enviar {
        position: absolute;
        width: 112px;
        height: 39px;
        left: 979px;
        top: 71px;
    }

    #sobre {
        position: absolute;
        width: 112px;
        height: 39px;
        left: 1104px;
        top: 71px;
    }
    #busca{
        position:absolute;
        left: 1236px;
        top:71px;
        width:164px;
        height:40px;
        
    }

    .dropbtn {
        background-color:transparent;
        padding: 16px;
        border: none;
        width:100%;
        height:100%;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute; 
        z-index: 1;
        width:100%;
        height:100%;
   
    }
    .dropdown-content a {
        color:black;
        font-size:14px;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        border-bottom:1px solid black;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    input{
        width:80%;
        height:100%;
        margin-top:0px;
        font-size:18px;
        
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border-bottom:1px solid black;
    }
    input text{
        vertical-align: bottom;
    }

</style>