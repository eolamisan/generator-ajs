'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);

    // This makes `componentname` a required argument.
    this.argument('componentname', { type: String, required: true });

    // And you can then access it later; e.g.
    this.log(this.options.componentname);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('template.component.js'),
      this.destinationPath(this.options.componentname + ".component.js"),
      { componentname: this.options.componentname }
    );

    this.fs.copyTpl(
      this.templatePath('template.controller.js'),
      this.destinationPath(this.options.componentname + ".controller.js"),
      { componentname: this.options.componentname }
    );

    this.fs.copyTpl(
      this.templatePath('template.controller.spec.js'),
      this.destinationPath(this.options.componentname + ".controller.spec.js"),
      { componentname: this.options.componentname }
    );

    this.fs.copyTpl(
      this.templatePath('template.css'),
      this.destinationPath(this.options.componentname + ".css"),
      { componentname: this.options.componentname }
    );

    this.fs.copyTpl(
      this.templatePath('template.html'),
      this.destinationPath(this.options.componentname + ".html"),
      { componentname: this.options.componentname }
    );
  }

};
