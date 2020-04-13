import axios from 'axios';
import Vue from 'vue';
import { Loading } from 'element-ui';


export function axiosGet(url, params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        Loading.service({ text: '努力加载中。。。' });
        axios.get(process.env.API_HOST + url, { params, headers: Object.assign({}, headers) }).then(res => {
            Loading.service().close();
            if (res.data.code == 0) {
                resolve(res.data.data)
            } else {
                reject(res.data.msg)
            }
        }).catch(err => {
            Loading.service().close();
            reject(err)
        })
    })
}

export function axiosPost(url, params = {}, ) {
    return new Promise((resolve, reject) => {
        Loading.service({ text: '努力加载中。。。' })
        axios.post(process.env.API_HOST + url, params).then(res => {
            Loading.service().close();
            if (res.data.code == 0) {
                resolve(res.data.data)
            } else {
                reject(res.data.msg)
            }
        }).catch(e => {
            Loading.service().close();
            reject(e)
        })
    })
}