<template>
    <div class="infos">    
        <div class="filtros">   
            <select>   
                    <option>Jogo</option>   
                    <option>Aplicativo</option>    
                    <option>Infográfico</option>    
                </select>    
        </div>   
        <div class="filtro">    
            <p>Filtro:</p>    
        </div>   
        <div class="projetos">    
            <p>PROJETOS</p>    
        </div>    
        <div class="borda">    
        </div>
    
    </div>
</template>

<script>
export default {
    name: "Filtros"
}
</script>

<style scoped>
.infos {
    background: transparent;
    position: relative;
    width: 1439px;
    height: 79px;
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

.projetos p {
    position: absolute;
   left: 74px;
top: 16px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 35px;

color: #000000;

}

.borda {
    position: absolute;
width: 237px;
height: 0px;
left: 68px;
top: 53px;

border: 1px solid #000000;
}
</style>