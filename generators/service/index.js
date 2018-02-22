'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);

    // This makes `servicename` a required argument.
    this.argument('servicename', { type: String, required: true });

    // And you can then access it later; e.g.
    this.log(this.options.servicename);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('template.service.js'),
      this.destinationPath(this.options.servicename + '.service.js'),
      { servicename: this.options.servicename }
    );

    this.fs.copyTpl(
      this.templatePath('template.service.spec.js'),
      this.destinationPath(this.options.servicename + '.service.spec.js'),
      { servicename: this.options.servicename }
    );
  }
};
