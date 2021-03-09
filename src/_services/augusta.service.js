import config from 'config';
import { fetchWrapper } from '@/_helpers';
const baseUrl = `${config.apiUrl}/augusta`;

export const augustaService = {
    create
};

function create(body){
    console.log("sending request...");
    fetchWrapper.postFile(baseUrl, body)
        .then(res => console.log(res));
}