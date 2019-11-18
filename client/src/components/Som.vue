<template>
  <div class="som">
      <div id="background">
            <audio controls>
                <source :src="audioprop" type="audio/ogg">
            </audio>
            <h2 id="titulo"> {{tituloprop}}</h2>
            <h5 id="descricao"> {{descricaoprop}}</h5>
            <button id="detalhes-button"> <p>BAIXAR</p> </button>    
      </div>
  </div>
</template>

<script>

export default {
    name:'som',
    props:["titulo","descricao","audio","objeto"],
    data:function() {
        return {
        tituloprop:this.objeto.titulo,
        descricaoprop:this.objeto.descricao,
        audioprop:this.objeto.audio,
        autorprop:this.objeto.autor,
        contatoprop:this.objeto.contato
        }
    }
    
}
</script>

<style scoped>
.som{
    position:relative;
}

#background{
    background: #DFDFDF;
    height:100%;
    width: 1440px;
    height: 182px;
}
#caixaDoSom{
    position: absolute;
    width: 425px;
height: 104px;
left: 68px;
top: 41px;

background: #FDFDFD;
}
audio{
    position: absolute;
width: 425px;
height: 54px;
left: 68px;
top: 62px;
}
#titulo{
    position:absolute;
    
left: 530px;
top: 41px;
    font-weight: bold;
}
#descricao{
    position: absolute;
width: 233px;
height: 26px;
left: 530px;
top: 111px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
/* identical to box height */


color: black;
}
#detalhes-button{
    position: absolute;
width: 217.06px;
height: 75.18px;
left: 1068px;
top: 70px;



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