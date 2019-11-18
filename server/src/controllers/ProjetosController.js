const {Projeto} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const projeto = await Projeto.findAll({
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ['title', 'ASC']],
          
      })
      
      res.send(projeto)
      
    } catch (err) {
      res.status(500).send({
        error: "Erro get"
      })
    }
  },
  async show (req, res) {
    try {
      const projeto = await Projeto.findByPk(req.params.projetoId)
      res.send(projeto)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const projeto = await Projeto.create(req.body)
      console.log(req.file)
      res.send(projeto)
      
    } catch (err) {
      res.status(500).send({
        error: "Erro post"
      })
    }
  },
  async login (req, res) {
    try {
      
      const {id, password} = req.body
      console.log(req.body)
      const proj = await Projeto.findOne({
        where: {
          id: id
        }
      })

      if (!proj) {
        return res.status(403).send({
          error: 'Email incorreto'
        })
      }

      const senhaValida = await proj.comparePassword(password)
      console.log(senhaValida)
      if (!senhaValida) {
        return res.status(403).send({
          error: 'Senha incorreta'
        })
      }
      const projJson = proj.toJSON()
      res.send({
        proj: projJson,
        
      })
    } catch (err) {
        
      res.status(500).send({
        error: 'An error has occured trying to log in'
        
      })
    }}
}