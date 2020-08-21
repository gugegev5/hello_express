/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-02-11 11:06:50
 * @Last Modified by: gupeng
 * @Last Modified time: 2020-08-21 18:44:03
 */
const express = require("express");
const chalk = require("chalk");
const { log } = require("util");
const path = require("path");
const url = require("url");
const http = require("https");
const urlConfig = require("../../config/index");

module.exports = () => {
  const router = express.Router();

  router.get("*", (req, res, next) => {
    const urlInfo = url.parse(req.url);
    if (urlInfo.pathname !== "/" && urlInfo.pathname.endsWith("/")) {
      urlInfo.pathname = urlInfo.pathname.replace(/\/$/, "");
      res.redirect(url.format(urlInfo));
    }
    next();
  });

  router.get([/^\/(\w+)$/], (req, res, next) => {
    if (
      !Number.isNaN(req.params[0]) &&
      /^(?=.*[A-Za-z])[A-Za-z\d]{3,13}$/.test(req.params[0])
    ) {
      const requestUrl = `https:${urlConfig.laravel}/api/v1/room/get_room_by_specific`;
      const requestOption = {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      };
      const request = http.request(requestUrl, requestOption, (resp) => {
        resp.on("data", (chunk) => {
          console.log(`响应主体: ${chunk}`);
        });
        resp.on("end", () => {
          console.log("响应中已无数据");
        });
      });
      console.log("name:", req.params[0], "requestUrl", requestUrl);
      request.write(JSON.stringify({ specific: req.params[0] }));
      request.end();
    //   return "test test";
    next();
      // return ssrCache({ req, res, pagePath: '/live', queryParams: { roomid: req.params[0] } });
    } else {
      next();
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  router.use((error, req, res, _) => {
    log(chalk.bold.yellow("WARN:") + error.stack);
    res.status(500);
    return "/_error";
  });

  return router;
};
