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

//   writing() {
//     this.fs.copyTpl(
//       this.templatePath('_package.json'),
//       this.destinationPath('package.json'), {
//         name: this.props.name,
//         authorName: this.props.authorName
//       }
//     );
//     this.fs.copyTpl(
//       this.templatePath('_postcss.config.js'),
//       this.destinationPath('postcss.config.js')
//     );
//     this.fs.copyTpl(
//       this.templatePath('_webpack.config.js'),
//       this.destinationPath('webpack.config.js')
//     );
//     this.fs.copyTpl(
//       this.templatePath('src'),
//       this.destinationPath('src'),{
//         name: this.props.name
//       }
//     );
//   }


};
