import * as axios from "axios";

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e' +
    'XBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyMjExMDI4LCJpYXQiOjE2Mzk2MTk' +
    'wMjgsImp0aSI6ImRiYzVmMjgzOGRlMDQwMjU4NGQ2MjVhYmVhZjU1NWNkIi' +
    'widXNlcl9pZCI6MX0.KNybOMH_BEkdz-hU45EORMLzo6kT6iU4uszjvsvEblk'

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