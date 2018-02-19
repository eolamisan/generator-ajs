'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);

    // This makes `featurename` a required argument.
    this.argument('featurename', { type: String, required: true });

    // And you can then access it later; e.g.
    this.log(this.options.featurename);
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath(this.options.featurename + '/main.js'),
      { featurename: this.options.featurename }
    );

    this.fs.copyTpl(
      this.templatePath('template.module.js'),
      this.destinationPath(this.options.featurename + "/" + this.options.featurename + '.module.js'),
      { featurename: this.options.featurename }
    );
  }

};
