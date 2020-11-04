import service from '@/services/service.js';
var urlBase = 'https://techpoker.herokuapp.com/api'
// var urlBase = 'http://localhost:3000/api'

export default {
    findUsers: async () => {
        let path = '/users';

        var retorno = null;

        try{
            await service.get(urlBase, path). then(response => { retorno = response });    
        }
        catch(e){
            retorno = e.response
        }

        return retorno;
    },
    // ,cadastrarRotacoes: async (requestBody) => {
    //     let barramento = `rotacoes/turmas`;
    //     await service.post(urlBase, barramento, requestBody);
    // }


    playCard: async (requestBody) => {
        let path = '/play';

        var retorno = null;
        
        try{
            await service.post(urlBase, path, requestBody). then(response => { retorno = response });
        }catch(e){
            retorno = e.response
        }
        

        return retorno;
    }

};