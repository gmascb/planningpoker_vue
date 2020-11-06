import service from '@/services/service.js';
var urlBase = 'https://techpoker.herokuapp.com/api'
// var urlBase = 'http://localhost:3000/api'

export default {
    findUsers: async () => {
        let path = '/users';

        var resp = null;

        try{
            await service.get(urlBase, path). then(response => { resp = response });    
        }
        catch(e){
            resp = e.response
        }

        return resp;
    },
    findRooms: async () => {
        let path = '/rooms';

        var resp = null;

        try{
            await service.get(urlBase, path). then(response => { resp = response })   
        }
        catch(e){
            resp = e.response
        }

        return resp;
    },
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