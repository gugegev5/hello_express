/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-01-06 16:48:10
 * @Last Modified by: gupeng
 * @Last Modified time: 2020-08-21 18:38:52
 */

const express = require("express");
// const compression = require('compression');
const chalk = require("chalk");
const { log } = require("util");

// const app = next({ dev: process.env.NODE_ENV === 'development' });

log(chalk.bold.yellow("启动服务器..."));

// app.prepare().then(() => {
const server = express();

server.set("x-powered-by", false);
// server.use(compression());

if (process.env.NODE_ENV === "development") {
//   server.use(require("./route/dev-proxy"));
}

server.use(require("./route/next")());

const host = "127.0.0.1",
  port = 3001;

server.listen(port, (error) => {
  if (error) throw error;
  const os = require("os");
  log(chalk.bold.green(`> OS: ${os.platform()} ${os.arch()}`));
  log(chalk.bold.green(`> NODE: ${process.version}`));
  log(chalk.bold.green(`> CMD: ${process.argv}`));
  log(
    chalk.bold.green(`> EXPRESS: ${require("express/package.json").version}`)
  );
  log(
    chalk.bold.green(
      `> REACT: ${require("react/package.json").version} x ${
        require("react-dom/package.json").version
      }`
    )
  );
  
  log(chalk.bold.green(`> Ready on http://${host}:${port}`));
});
// });

process.on("uncaughtException", (error) => {
  log(chalk.bold.red("ERROR:") + error.message);
});
