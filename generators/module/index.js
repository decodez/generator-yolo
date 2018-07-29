'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');



module.exports = class extends Generator {




    writing() {

        if (this.options.atomic) {
            this.fs.copyTpl(
                this.templatePath('module.pug'),
                this.destinationPath(`src/_modules/${this.options.atomic}s/${this.arguments}/${this.arguments}.pug`),{
                    name: this.arguments
                }
            );
            this.fs.copyTpl(
                this.templatePath('module.scss'),
                this.destinationPath(`src/_modules/${this.options.atomic}s/${this.arguments}/${this.arguments}.scss`),{
                    name: this.arguments
                }
            );
            this.fs.copyTpl(
                this.templatePath('module.js'),
                this.destinationPath(`src/_modules/${this.options.atomic}s/${this.arguments}/${this.arguments}.js`),{
                    name: this.arguments
                }
            );
        } else {
            this.fs.copyTpl(
                this.templatePath('module.pug'),
                this.destinationPath(`src/_modules/${this.arguments}/${this.arguments}.pug`),{
                    name: this.arguments
                }
            );
        }
        
    }


};
