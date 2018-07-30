'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.pages.push(this.arguments),
      this.templatePath('page.pug'),
      this.destinationPath(`src/${this.arguments}/index.pug`),
      {
        name: this.arguments
      }
    );
  }
};
