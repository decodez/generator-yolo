'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {


    writing() {
        this.fs.copyTpl(
            this.templatePath('page.pug'),
            this.destinationPath(`src/${this.arguments}/index.pug`),{
                name: this.arguments
            }
        );
    }


};
