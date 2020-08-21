/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2019-12-02 15:30:32
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-07-30 12:38:15
 */

module.exports = {
    log: 0,
    pro: '//test.qi-e.tv:3000',
    /** 服务IP */
    host: '127.0.0.1',
    /** 服务端口 */
    port: '3000',
    /** 新接口域名 */
    dev: '//test.qi-e.tv:3000',
    /** laravel 接口域名 */
    laravel: '//test.qi-e.tv:3000',
    /** 旧接口域名 */
    live: '//test.qi-e.tv:3000',
    /** websocket */
    ws: 'test://',
    /** cdn地址 */
    cdn: {
        avatar: '//uc-server.dev.qi-e.tv',
        upload: '//upstatic.qiecdn.com',
        img: '//images.qiecdn.com',
        static: '//static-url.dev.qi-e.tv/',
        media: '//test.qi-e.tv:3000',
        next: '//test.qi-e.tv:3000/static-next'
    },
    redis: {
        host: '172.17.1.51',
        port: 6379
    },
    sc: '//sclog.qiecdn.com/sa?project=default', //神策统计
    hmt: '//hm.baidu.com/hm.js?5280b055574fcbf863b5e9ce664afb9f' // 百度统计
};
