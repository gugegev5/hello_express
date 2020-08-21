/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2019-11-30 10:45:35
 * @Last Modified by: inter
 * @Last Modified time: 2020-05-20 16:39:51
 */
module.exports =
    process.env.TARGET === 'local'
        ? require('./config.local')
        : process.env.TARGET === 'dev'
        ? require('./config.dev')
        : process.env.TARGET === 'pre'
        ? require('./config.pre')
        : require('./config.pro');
