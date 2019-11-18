<template>
    <div class="pagina">
        <Header/>
        <div class="pagina" >
            <form class="text-center" style="color: #757575;" @submit="enviar" action="localhost:8080"  enctype="multipart/formdata">

                <p id="texto">ENVIE SEU RECURSO!</p>

                <!--Titulo e descrição -->
            <input id="titulo" type="text" placeholder="Título do seu recurso*" name="titulo" form="usrform" v-model="projeto.title" required>
            <textarea id="descricao" type="text" placeholder="Descrição*" name="descricao" form="usrform" v-model="projeto.conteudo" required></textarea>
            
            
            <!--Projeto ou Asset -->
            <p id="textoRecurso">Recurso:*</p>
            <div id="recursos" >   
                <select name="recurso" form="usrform" v-model="projeto.type" required> 
                    <option value=""></option>  
                    <option value="Projeto">Projeto</option>
                    <option value="Asset">Asset</option> 
                </select>    
            </div>

            <!--Tipo -->
            <p id="textoTipo" v-if="projeto.type=='Projeto'">Tipo:*</p>
            <div  id="tipo" v-if="projeto.type=='Projeto'">   
                <select name="tipo" form="usrform" v-model="projeto.tipo" required>
                    
                    <option value="Aplicativo">Aplicativo</option>
                    <option value="Infográfico">Infográfico</option>
                    <option value="Jogo">Jogo</option>
                    <option value="Sprites 2D">Sprites 2D</option>
                    <option value="Modelos3D">Modelos 3D</option>
                    <option value="Documentos">Documentos</option>
                    <option value="Sons">Sons</option>
                </select>
            </div>
            <p id="textoTipo" v-if="projeto.type=='Asset'">Tipo:*</p>
            <div id="tipo" v-if="projeto.type=='Asset'">   
                <select name="tipo" form="usrform" v-model="projeto.tipo" required>
                    <option value=""></option>
                    <option value="Aplicativo">Aplicativo</option>
                    <option value="Infográfico">Infográfico</option>
                    <option value="Jogo">Jogo</option>
                    <option value="Sprites 2D">Sprites 2D</option>
                    <option value="Modelos3D">Modelos 3D</option>
                    <option value="Documentos">Documentos</option>
                    <option value="diferente">Diferente</option>
                </select>
            </div>
            <p id="textoAutor" >Autor(es):</p>
            <input id="autor" type="text" v-model="projeto.autor" value="">

            <!--Semestre -->
            <p id="textoSemestre">Semestre:</p>
            <select name="semestre" id="semestre" form="usrform" v-model="projeto.semestre" required>
                    <option value=""></option>
                    <option value="1">Primeiro</option>
                    <option value="2">Segundo</option>
                    <option value="3">Terceiro</option>
                    <option value="4">Quarto</option>
                    <option value="5">Quinto</option>
                    <option value="6">Sexto</option>
                    <option value="7">Sétimo</option>
                    <option value="8">Oitavo</option>
                    <option value="9">Nono</option>
                    <option value="0">Sem semestre</option>
            </select>
            <!--Tags, Email, Disciplina -->
            <p id="textoTags">Tag(s)*:</p>
            <input id="tags" type="text" value="" name="descricao" v-model="projeto.tags" form="usrform" required>
            <p id="textoContato">Contato:</p>
            <input id="contato" type="text" v-model="projeto.email" value="">
            <p id="textoDisciplina">Disciplina:</P>
            <input id="disciplina" type="text" v-model="projeto.disciplina" value="">

            <!--Arquivo do Projeto -->
            <div id="procurar">
                <img src="../assets/icones/seta.png" width=50px height=40px>
                <input 
                   
                  ref="arquivo" 
                  type="file" 
                  id="imgFile" 
                  class="escolhe-imagem"
                  accept=".zip, .rar"
                  @change="onFileSelected2">
                <p>Arquivos suportados: png,jpg,gif,etc</p>
            </div>

            <!--Imagem do Projeto -->

            <img id="placeholder" :src=imgCarrega v-on:click="openUpload">
            <input 
                   
                  ref="file" 
                  type="file" 
                  id="imgFile" 
                    accept="image/*"
                  class="escolhe-imagem"
                  @change="onFileSelected">
            
            
            
            <input id="cancelar" type="button" value="Cancelar">

            <b-button size="lg" type="submit"  variant="primary" class="btn-enviar" >Cadastrar Projeto</b-button>
            
            
            </form>
            
            
        </div>
    </div>
</template>

<script>
import Header from "../components/Header2.vue"
import ProjetoService from "@/services/ProjetoService"


export default {
    name: "enviar",
    components: {
        Header
    },
    data(){
        return {
            projeto: {
            title: null,
            conteudo: null,
            fotoUrl: null ,
            tipo: null,
            autor: null,
            type:null,
            semestre:null,
            tags:null,
            email:null,
            disciplina:null,
            visto:false,
            likes:0,
            arquivo:null,
            password:null
        },
        files:null,
        arquivo:null,
        imgCarrega:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtYZV2QyyZM5SHKFOvww9GYw9WnDz2Jp9vfhSX32t28OklRN8m"
        }},//fim do data

    methods:{
        openUpload(){
            document.getElementById('imgFile').click()
        },
        onFileSelected(e){
            this.files = this.$refs.file.files[0]
            var files2 = event.target.files
            
            var reader = new FileReader()
            reader.onload = (event) => {
                this.imgCarrega = event.target.result
            }
            reader.readAsDataURL(files2[0])
        },
        onFileSelected2(e){
            this.arquivo = this.$refs.arquivo.files[0]
            
        },
         async enviar(){
            const fd = new FormData();
            const df = new FormData();
            console.log(this.projeto)
            fd.append("file", this.files)
            df.append("file", this.arquivo)
            try{
                const url = await ProjetoService.upload(fd)
                const urlArquivo = await ProjetoService.arquivo(df)
        
                this.projeto.fotoUrl = url.data
                this.projeto.arquivo = urlArquivo.data
                
                await ProjetoService.post(this.projeto)
                this.$router.push({
                    name: "enviarconfirma"
                })
                
            }catch(err){
                console.log(err)
            }
            
    }
    },//fim dos metodos
   
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
    .btn-enviar{
        position: absolute;
        top:750px;
        left:1000px;
        font-size:20px;

    }
    .escolhe-imagem{
        position:absolute;
        top:325px;
        left:830px;
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
        left: 300px;
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
</style>