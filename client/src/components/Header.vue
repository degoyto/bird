<template>
    <div class="header">    
        <div id="fundo"> 
            <div id="logo">
                <a href="http://localhost:8080/">
                    <img src="../assets/logoBird.png" alt="BIRD" style="height: 100%;   width: 100%;"/>
                </a>
            </div>
            <div id="botoes_maiores">
                
                <form action="http://localhost:8080/projeto"> 
                    <button id="projetos" onclick>   
                        <p>PROJETOS</p> 
                    </button>
                </form>
                
                <button id="sprites">    
                    <p>SPRITES</p>   
                </button>    
                
                <button id="sons">   
                    <p>SONS</p>   
                </button>

            </div>

            <div id="botoes_menores">
                <form action="http://localhost:8080/enviar"> 
                    <button  id="upload">
                        <p>UPLOAD</p>
                    </button >
                </form>
                <form action="http://localhost:8080/sobre"> 
                    <button  id="sobre">
                        <p>SOBRE</p>
                    </button >
                </form>
            </div>

            <div id="busca">
                
                <form>
                    <input type="text" name="firstname">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"

}
</script>

<style scoped>

p{
    margin-bottom:0px;
}
.header{
    position: relative;
    margin-top:0px;
    
    text-align: center;
    padding:0px;

    width: 1439px;
    height: 175px;
    }

#fundo {
    
    left:0px;
    top:0px;
    height: 175px;
    width:  1439px;
    background: #F6F6F6;   
}
#logo {
    position: absolute;
    width: 295px;
    height: 145px;
}

.header button{
    border-style: none;
    outline: none;
    background: #FFFFFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
.header button:hover {
    background: #f2f2f2;
}
.header button:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(1px);
}

#botoes_maiores{
    text-align:center;
    font-family: Roboto;   
}
#botoes_maiores button{
    font-size: 18px;
    line-height: 21px;
    font-style: normal;
    font-weight: normal;
}

#projetos{
    
    position: absolute;
    width: 164px;
    height: 57px;
    left: 316px;
    top: 62px;

    
}
#sprites{
    position: absolute;
    width: 163px;
    height: 57px;
    left: 501px;
    top: 62px;

    
}
#sons{
    position: absolute;
    width: 164px;
    height: 57px;
    left: 684px;
    top: 60px;

    
}


#botoes_menores{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
}
#upload{
    position: absolute;
    width: 112px;
    height: 39px;
    left: 940px;
    top: 74px;
}
#sobre{
    position: absolute;
    width: 112px;
    height: 39px;
    left: 1084px;
    top: 74px;
}

#busca{
    position:absolute;
    left: 1240px;
    top: 87px;
    width: 133px;
}
#busca input[type=text]{
    width:100%;
}
</style>
