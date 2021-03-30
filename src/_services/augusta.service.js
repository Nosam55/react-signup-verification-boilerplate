import config from 'config';
import { fetchWrapper } from '@/_helpers';
import { accountService } from "./account.service";

const baseUrl = `${config.apiUrl}/augusta`;


export const augustaService = {
    getOne,
    getAll,
    getMine,
    create
};

function getOne(id){
    return fetchWrapper.get(`${baseUrl}/get/${id}`);
}

function getAll(){
    return fetchWrapper.get(`${baseUrl}/get`);
}

function getMine(){
    return fetchWrapper.get(`${baseUrl}/mine`);
}

function create(body){
    fetchWrapper.postFile(baseUrl, body)
        .then(res => console.log(res));
}