<template>
  <div class="documento">
      <div v-if="filtro" id="filtro">
          <p id="tituloPagina"> DOCUMENTOS</p>
          <div id="divisao"></div>
          
          <div class="filtros">   
            <select>   
                    <option>Titulo</option>   
                        
                </select>    
        </div>   
        <div class="filtro">    
            <p>Filtro:</p>    
        </div>   

      </div>
      <div id="background">
          
          <div id="caixaDoDoc">

                <img v-if="tipo=='pdf'" id="icone" src="../assets/icones/pdf.png"/>
                <img v-if="tipo=='ppt'" id="icone" src="../assets/icones/ppt.png"/>
                <img v-if="tipo=='doc'" id="icone" src="../assets/icones/doc.png"/>
                <h2 id="titulo"> {{titulo}}</h2>
                <h5 id="descricao"> {{descricao}}</h5>
                <h2 id="titDisciplina"> Disciplina:</h2>
                <h5 id="disciplina">{{disciplina}}</h5>
                <button id="detalhes-button"> <p>BAIXAR</p> </button>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name:'Documento',
    props:["titulo","descricao","tipo","disciplina","filtro"],
}

</script>

<style scoped>
.documento{
    position:relative;
    font-family: Roboto;
}

#filtro{
    position: relative;
    width: 1440px;
    height: 86px;
    left: 0px;
    top: 0px;
    background-color:#DFDFDF;;
}
#tituloPagina{
    position:absolute;
    width: 173px;
    height: 50px;
    left: 50px;
    top: 25px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 35px;
}

#divisao{
    position: absolute;
width: 282px;
height: 0px;
left: 44px;
top: 62px;

border: 1px solid #000000;
}
.filtros{
    position:absolute;
    left: 1153px;
    top: 28px;
    width: 175px;
    height: 45px;
}
.filtros select {
    font-family: Roboto;    
    width: 175px;
    height: 45px;
    }
    .filtro{
    position: absolute;
width: 80px;
height: 29px;
left: 1073px;
top: 37px;
}
.filtro p {
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 26px;
line-height: 30px;

color: #000000;

}
#background{
    background: #DFDFDF;
    height:100%;
    width: 1439px;
    height: 135px;
}
#caixaDoDoc{
    position: relative;
    width: 1360px;
    height: 104px;
    left: 42px;
    top: 15px;
    background: #FDFDFD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
#icone{
    position: absolute;
    left: 50px;
top: 15px;
    width: 73px;
height: 73px;
}
#titulo{
    position:absolute;
    left: 230px;
    top: 29px;
    font-weight: bold;
}
#titDisciplina{
    position: absolute;
    left: 652px;
    top: 29px;
    font-weight: bold;
}
#disciplina{
    position: absolute;
    left: 652px;
    top:50px;
}
#descricao{
    position:absolute;
    left: 230px;
    top:50px;
}
#detalhes-button{
    position: absolute;
width: 205px;
height: 71px;
left: 1074px;
top: 15px;

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
#detalhes-button p{
    margin-bottom:0;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;

color: #000000;
}
</style>