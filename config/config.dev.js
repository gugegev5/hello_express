/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2019-11-30 10:25:44
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-08-05 11:21:54
 */
module.exports = {
    log: 1,
    /** 线上域名 */
    pro: '//live.qq.com',
    /** 服务IP */
    host: '127.0.0.1',
    /** 服务端口 */
    port: '3000',
    /** 新接口域名 */
    dev: '//www1.dev.qi-e.tv',
    /** laravel 接口域名 */
    laravel: '//laravel-api.php7.dev.qi-e.tv',
    /** 旧接口域名 */
    live: '//www.dev.qi-e.tv',
    /** websocket */
    ws: 'test://',
    /** cdn地址 */
    cdn: {
        avatar: '//uc-server.dev.qi-e.tv',
        upload: '//upstatic.qiecdn.com',
        img: '//images.qiecdn.com',
        static: '//static-url.dev.qi-e.tv/',
        media: '//qietv-play.qiecdn.com',
        next: '/'
    },
    redis: {
        host: '172.17.1.51',
        port: 6379
    },
    hmt: '//hm.baidu.com/hm.js?5280b055574fcbf863b5e9ce664afb9f', // 百度统计
    sc: '//sclog.qiecdn.com/sa?project=default' //神策统计
};
