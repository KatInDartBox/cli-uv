#!/usr/bin/env node
const program = require("commander");

const colors = require("colors");

// execute file
const createReact = require("./actions/create-react");
const createRedux = require("./actions/create-redux");

program.version("1.0.0");

program
  .command("rc <path>")
  .option("--css", "style: scss/css; default:false; render scss")
  .option("-m,--styleModule", "style module; default:false")
  .option("-s,--single", "without style; default:false")
  .option("-c,--reactClass", "react class; default:false, render function")
  .action(createReact);

program
  .command("rd <path>")
  // .option("-t,--template", "include boiler plate?")
  .action(createRedux);
program.parse(process.argv);
