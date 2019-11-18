<template>
    <div id="infoSobre">
        <img id="logoPh" src="../assets/logoEquipe.png" alt="LOGOSMD"/>
        <p class=txt id='t1'>A equipe PLACEHOLDER é composta por 6 jovens da paz que, com a ajuda dos professores do curso e com a ideia do nosso cliente Alysson Diniz, criou o (NOME DO SITE).</p>
        <p class=txt id='t2'>O (NOME DO SITE) é um site feito pelos alunos do SMD para os alunos do SMD. Nosso propósito foi criar um repositório para guardar tudo aquilo feito no curso.</p>
    </div>
</template>

<script>
export default {
    name: 'infoSobre'
}
</script>

<style scoped>
#infoSobre{
    width: 1439px;
    height: 694px;
    background-color: #DFDFDF;

}

#logoPh{
    display: block;
    width: 350px;
    height: 350px;
    margin-left: auto;
  margin-right: auto;
    
}

.txt {
position: absolute;
width: 624px;
height: 124px;
left: 408px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
}

#t1{
    top: 587px;
}

#t2{
    top: 711px;
}
</style>