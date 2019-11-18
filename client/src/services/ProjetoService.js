import  Api from '@/services/Api'

export default {
    index () {
        return Api().post("gnoticias", so1)
    },
    show(noticiaId){
        return Api().get(`noticia/${noticiaId}`)
    },
    post(projeto){
        return Api().post("enviaarquivo",projeto)
    },
    upload(fd){
        return Api().post("up", fd)
    },
    arquivo(fd){
        return Api().post("arquivo", fd)
    }
}
