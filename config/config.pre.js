/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2019-11-30 10:36:03
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-08-04 10:09:42
 */
const config = require('./config.dev');

module.exports = {
    ...config,
    /** 新接口域名 */
    dev: '//live.qq.com',
    /** laravel 接口域名 */
    laravel: '//p7api.qiecdn.com',
    /** 旧接口域名 */
    live: '//live.qq.com',
    /** websocket */
    ws: 'online://',
    cdn: {
        ...config.cdn,
        avatar: '//uc.qiecdn.com',
        upload: '//upstatic.qiecdn.com',
        static: '//static.qiecdn.com/',
        img: '//images.qiecdn.com',
        next: '//static.qiecdn.com/static-next'
    },
    redis: {
        host: '172.17.1.51',
        port: 6379
    },
    sc: '//sclog.qiecdn.com/sa?project=production', //神策统计
    hmt: '//hm.baidu.com/hm.js?436e0af00b4308082985d33e8abe407e' // 百度统计地址
};
