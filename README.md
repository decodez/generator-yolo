# generator-yolo [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Awesome static site generator based on Webpack!


> NOTE: ## currently on Development. Not ready for production use.


## Technologies
- Webpack
- SASS
- PUG for templating
- ES6


## Getting Started

- Install Node.js

Check to see if you already have Node installed. Do this by bringing up a terminal/command prompt and type `node -v`. If the response shows a version at or above `v0.5.x`, you are all set and can proceed to installing Yeoman. If you see an error and/or your version is too low, navigate to the [Node.js](http://nodejs.org/) website and install Node from there.

- Install [Yeoman](http://yeoman.io) 

```bash
npm install -g yo
```

- Install generator-yolo
```bash
npm install -g generator-yolo
```

- Generating new project

  Create a new folder with intended project name. open command line and navigate to the newly created folder.

  Once you are in the project folder. Run the following command.

```bash
yo yolo
```

Generator will automatically run `npm install` once the project files has been created.


Once everything is installed, you will see a project structure like below:

```
├── src
|   ├── _images                # Images
|   ├── _layouts               # Layout structure for app
|   |   └── base.jade
|   ├── _modules               # Reusable modules
|   |   └── button
|   |       ├── button.pug
|   |       ├── button.js
|   |       └── button.scss
|   ├── _styles               # Global styles, mixins, variables, etc
            _fonts.scss       # Custom fonts
|   |   └── main.scss         # Main stylesheet (import everything to this file)
|   ├── _scripts              # Global scripts, base classes, etc
|   |   └── main.js           # Main bootstrap file
|   ├── fonts                 # Fonts (Example, will not be generated)
|   ├── index.jade            # Homepage template
|   ├── favicon.ico
|   └── robots.txt
├── gulpfile.js               # Gulp task configuration
└── package.json              # Dependencies and site/folder configuration
```



## Sub-Generators

* [yolo:page](#page)
* [yolo:module](#module)

***Note: Generators need to be run from the root directory of your app.***

## Default Generators

### Page
Creates a new page.

#### Example:

```
$ yo yolo:page contact
```

Produces:

```
src/contact/index.pug
```

### Module
Creates a new module.

#### Example:

```
$ yo yolo:module header
```

Produces:

```
src/_modules/header/header.pug
src/_modules/header/header.scss
src/_modules/header/header.js
```

#### Example #2: Specifying module as atomic

This is a great way to create modules that adhere to [atomic design](http://patternlab.io/about.html)

```
$ yo yolo:module link --atomic=atom
```

Produces:

```
src/_modules/atoms/link/link.pug
src/_modules/atoms/link/link.scss
src/_modules/atoms/link/link.js
```

> NOTE: Possible `--atomic` options: atom, molecule, organism




## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Akhil Prasenan](www.decodez.net)


[npm-image]: https://badge.fury.io/js/generator-yolo.svg
[npm-url]: https://npmjs.org/package/generator-yolo
[travis-image]: https://travis-ci.org//generator-yolo.svg?branch=master
[travis-url]: https://travis-ci.org//generator-yolo
[daviddm-image]: https://david-dm.org//generator-yolo.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-yolo
