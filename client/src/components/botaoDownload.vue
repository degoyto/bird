<template>
    <div id=download>
        <button id="detalhes-button"> <p>BAIXAR</p> </button>
    </div>
</template>

<script>
export default {
    name:"botaoDownload"
}
</script>

<style scoped>
#detalhes-button {
    position:relative;
    width: 205px;
    height: 71px;
    border-style: none;
    outline:none;
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