<template>
    <footer class="footer">
        
        <div class='list-group list-group-horizontal' id="fundo">
            <img class='img' id="logoSmd" src="../assets/img.jpg" alt="LOGOSMD"/>
            <img class='img' id="logoPh" src="../assets/img.jpg" alt="LOGOPLACEHOLDER"/>
            <img class='img' id="logoUfc" src="../assets/img.jpg" alt="LOGOUFC"/>
        </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/dimitry-miroliubov" title="Dimitry Miroliubov">Dimitry Miroliubov</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>
    </footer>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css"
export default {
    name: 'RodapeSobre'
}
</script>

<style scoped>
.footer{
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


.img{
    position: absolute;
    width: 150px;
    height: 150px;
}

#logoSmd{
    left: 200px;
    top: 15px;
}

#logoPh{
    left: 650px;
    top: 15px;
}

#logoUfc{
    right: 200px;
    top: 15px;
}
</style>