import servico from '@/services/service.js';
var urlBase = 'https://techpoker.herokuapp.com/api'

export default {
    findUsers: async () => {
        let path = '/users';

        var retorno = null;

        await servico.get(urlBase, path). then(response => { retorno = response });

        return retorno;
    },
    // ,cadastrarRotacoes: async (requestBody) => {
    //     let barramento = `rotacoes/turmas`;
    //     await servico.post(urlBase, barramento, requestBody);
    // }


    playCard: async (requestBody) => {
        let path = '/play';

        var retorno = null;

        await servico.post(urlBase, path, requestBody). then(response => { retorno = response });

        return retorno;
    }

};