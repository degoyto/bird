const AuthenticationController = require("./controllers/AuthenticationController")
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy")
const ProjetosController = require("./controllers/ProjetosController")
const multerConfig = require ("./config/multerConfig")
const multerConfigArquivo = require ("./config/multerConfigArquivo")
const multer = require("multer")


module.exports = (app) =>{
    app.post("/register", AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.post('/lo',
    ProjetosController.login)

    app.get('/gnoticias',
    ProjetosController.index)

    app.get('/noticia/:noticiaId', 
    ProjetosController.show)

    app.post('/enviaarquivo', 
    ProjetosController.post)

    app.post("/up", multer(multerConfig).single("file"), async (req, res) => {
        const { originalname: name, size, key, location: url = "" } = req.file;
      
        
      
        return res.send(url);
      });

      app.post("/arquivo", multer(multerConfigArquivo).single("file"), async (req, res) => {
        const { originalname: name, size, key, location: url = "" } = req.file;
      
        
      
        return res.send(url);
      });
    
   


    
}