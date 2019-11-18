<template>
    <div>
        <Header/>
        <div class="pagina">
            <p id="texto">ENVIE SEU RECURSO!</p>
            <input id="titulo" type="text" placeholder="Título do seu recurso">
            <textarea id="descricao" type="text" placeholder="Descrição"></textarea>
            <p id="textoRecurso">Recurso:</p>
            <div id="recursos">   
                <select>   
                    <option>Projeto</option>
                    <option>Assets</option> 
                </select>    
            </div>
            <p id="textoTipo">Tipo:</p>
            <div id="tipo">   
                <select>   
                    <option>Aplicativo</option>
                    <option>Infográfico</option>
                    <option>Jogo</option>
                    <option>Sprites 2D</option>
                    <option>Modelos 3D</option>
                    <option>Documentos</option>
                    <option>Sons</option>
                </select>
            </div>
            <p id="textoAutor">Autor(es):</p>
            <input id="autor" type="text" value="">
            <p id="textoSemestre">Semestre:</p>
            <input id="semestre" type="text" value="">
            <p id="textoTags">Tag(s):</p>
            <input id="tags" type="text" value="">
            <p id="textoContato">Contato:</p>
            <input id="contato" type="text" value="">
            <p id="textoDisciplina">Disciplina:</P>
            <input id="disciplina" type="text" value="">
            <div id="procurar">
                <img src="../assets/icones/seta.png" width=50px height=40px>
                <input type="button" value="PROCURAR">
                <p>Arquivos suportados: png,jpg,gif,etc</p>
            </div>
            <img id="placeholder" src="../assets/placeholder-image.png">
            <input id="cancelar" type="button" value="Cancelar">
            <input id="enviar" type="button" value="ENVIAR">
            <div id="confirma">
                <p>Recurso enviado com sucesso!</p>
                <form action="http://localhost:8080/enviar">
                    <button id="botao_ok">Ok</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header2.vue"

export default {
    name: "enviar",
    components: {
        Header
    }
}
</script>

<style scoped>
    .pagina{
        position: relative;
        width: 1440px;
        height: 847px;
        left: 0px;
        top: 1px;

        background: #DFDFDF;
    }
    #texto{
        border-bottom: 1px solid #000000;
        position: absolute;
        width: 303px;
        height: 50px;
        left: 343px;
        top: 59px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 35px;
        color: #000000;
    }
    #titulo{
        position: absolute;
        width: 532px;
        height: 43px;
        left: 224px;
        top: 136px;

        
        border: 1px solid #000000;
        box-sizing: border-box;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
    }
    #descricao{
        position: absolute;
        width: 532px;
        height: 118px;
        left: 224px;
        top: 201px;

        resize: none;        
        
        border: 1px solid #000000;
        box-sizing: border-box;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-align: left;

        color: #000000;
    }
    #textoRecurso{
        position: absolute;
        width: 99px;
        height: 27px;
        left: 220px;
        top: 344px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    #recursos{
        position: absolute;
        width: 68px;
        height: 27px;
        left: 220px;
        top: 370px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    #textoTipo{
        position: absolute;
        width: 101px;
        height: 42px;
        left: 433px;
        top: 344px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    #tipo{
        position: absolute;
        width: 68px;
        height: 27px;
        left: 433px;
        top: 370px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    #textoAutor {
        position: absolute;
        width: 101px;
        height: 42px;
        left: 668px;
        top: 344px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    #autor{
        position: absolute;
        width: 232px;
        height: 27px;
        left: 668px;
        top: 371px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    }
    #textoSemestre{
        position: absolute;
        width: 101px;
        height: 42px;
        left: 928px;
        top: 344px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    #semestre{
        position: absolute;
        width: 232px;
        height: 27px;
        left: 928px;
        top: 371px;

        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    }
    #textoTags{
        position: absolute;
        width: 99px;
        height: 27px;
        left: 220px;
        top: 420px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;

    }
    #tags {
        position: absolute;
        width: 232px;
        height: 27px;
        left: 224px;
        top: 447px;

        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    }
    #textoContato{
        position: absolute;
        width: 101px;
        height: 42px;
        left: 668px;
        top: 421px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    #contato {
        position: absolute;
        width: 232px;
        height: 27px;
        left: 668px;
        top: 448px;

        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    }
    #textoDisciplina{
        position: absolute;
        width: 101px;
        height: 42px;
        left: 928px;
        top: 421px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    #disciplina{
        position: absolute;
        width: 232px;
        height: 27px;
        left: 928px;
        top: 448px;

        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    }
    #procurar{
        position: absolute;
        width: 992px;
        height: 145px;
        left: 224px;
        top: 530px;
        background: #C4C4C4;
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
    }
    #procurar img{
        position: absolute;
        left: 460px;
        top: 40px;
    }
    #procurar input{
        position: absolute;
        left: 430px;
        top: 100px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #000000;
    }
    #procurar p{
        position: absolute;
        width: 891px;
        height: 30px;
        left: 0px;
        top: 140px;

        

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.8);
    }
    #placeholder{
        position: absolute;
        width: 338px;
        height: 226px;
        left: 831px;
        top: 93px; 
    }
    #cancelar{
        position: absolute;
        width: 156px;
        height: 54px;
        left: 775px;
        top: 740px;

        background: #D7D6D2;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;

        color: #000000;
    }
    #enviar{
        position: absolute;
        width: 204px;
        height: 70px;
        left: 965px;
        top: 728px;

        background: #8BC297;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 30px;

        color: #000000;

    }
    #confirma{
        position: absolute;
        width: 1143px;
        height: 644px;
        left: 169px;
        top: 118px;
        background: #484848;
        border: 1px solid #000000;
        box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 96px;
        line-height: 112px;
        text-align: center;

        color: #EFEFEF;

    }
    #confirma p{
        position: absolute;
        top: 100px;
    }
    #confirma button {
        position: absolute;
        top: 420px;
        left: 500px;

        background: #D7D6D2;
        font-family: Roboto;
        color: #000000;
    }
</style>