import * as axios from "axios";

let token = ''

const config = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "Content-Type, Authorization"

    }
}

const instanceAxios = axios.create({
    baseURL: 'https://delana.llzp.ru:3000/api/v1/'
})


export const dataAPI = {
    getData() {
    return instanceAxios.get(`reference_plots`, config)
    }
}
