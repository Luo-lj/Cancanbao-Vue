import { axiosGet, axiosPost } from './request.js';

/**
 * 接口文档：https://api.it120.cc/doc.html
 */

/**
 * 获取banner列表
 */
export function getBanner() {
    return axiosGet('/llj/banner/list');
}

/**
 * 获取所有商品列表
 *  recommendStatus:'',推荐状态：不传该参数获取所有商品；0为一般商品；1为推荐商品
 */
export function goods(obj) {
    return axiosPost('/llj/shop/goods/list', obj, {
        'Content-Type': 'application/x-www-form-urlencoded'
    });
}