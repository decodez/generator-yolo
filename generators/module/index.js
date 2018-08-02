'use strict';
const Generator = require('yeoman-generator');
const _ = require('lodash');

module.exports = class extends Generator {
  writing() {
    let modulePath = String(this.arguments);
    let moduleName = String(this.arguments)
      .split('/')
      .slice(-1)[0];

    let convertedClassName = _.camelCase(moduleName);
    convertedClassName = _.upperFirst(convertedClassName);

    if (this.options.atomic) {
      this.fs.copyTpl(
        this.templatePath('module.pug'),
        this.destinationPath(
          `src/_modules/${this.options.atomic}s/${modulePath}/${moduleName}.pug`
        ),
        {
          name: moduleName
        }
      );
      this.fs.copyTpl(
        this.templatePath('module.scss'),
        this.destinationPath(
          `src/_modules/${this.options.atomic}s/${modulePath}/${moduleName}.scss`
        ),
        {
          name: moduleName
        }
      );
      this.fs.copyTpl(
        this.templatePath('module.js'),
        this.destinationPath(
          `src/_modules/${this.options.atomic}s/${modulePath}/${moduleName}.js`
        ),
        {
          name: convertedClassName
        }
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('module.pug'),
        this.destinationPath(`src/_modules/${modulePath}/${moduleName}.pug`),
        {
          name: moduleName
        }
      );
      this.fs.copyTpl(
        this.templatePath('module.scss'),
        this.destinationPath(`src/_modules/${modulePath}/${moduleName}.scss`),
        {
          name: moduleName
        }
      );
      this.fs.copyTpl(
        this.templatePath('module.js'),
        this.destinationPath(`src/_modules/${modulePath}/${moduleName}.js`),
        {
          name: convertedClassName
        }
      );
    }
  }
};
