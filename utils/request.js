import axios from 'axios';
import Vue from 'vue';
import config from '../config/prod.env'

export function axiosGet(url, params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        console.log("===>>> 当前环境：", process.env)
        axios.get(process.env.API_HOST + url, { params, headers: Object.assign({}, headers) }).then(res => {
            if (res.data.code == 0) {
                resolve(res.data.data)
            } else {
                reject(res.data.message)
            }
        }).catch(err => {
            reject(err)
        })
    })
}