# generator-yolo 
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
|   ├── _data                  # JSON files that add data to templates
|   ├── _fonts                 # Font files
|   ├── _images                # Images
|   ├── _layouts               # Layout structure for app
|   |   └── base.jade
|   ├── _modules               # Reusable modules
|   |   └── button
|   |       ├── button.pug
|   |       ├── button.js
|   |       └── button.scss
|   ├── _styles               # Global styles, mixins, variables, etc
        ├── _fonts.scss       # Custom font entries
|   |   └── main.scss         # Main stylesheet (import everything to this file)
|   ├── _scripts              # Global scripts, base classes, etc
|   |   └── index.js          # Main bootstrap file
|   ├── _fonts                # Fonts (Example, will not be generated)
|   ├── index.jade            # Homepage template
|   ├── favicon.ico
|   └── robots.txt
├── webpack.config.js         # Webpack Config
├── postcss.config.js         # Postcss config
└── package.json              # Dependencies and site/folder configuration
```

Congratulations! You should now have successfully created a YOLO project and are ready to start building out your site/app.


Now you can run the following tasks:

- `npm run dev` for previewing your site/app on a development server.
- `npm run build` for generating a production version of your site/app.


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

***Note: This command will prompt you for confirmation overwrite webpack.config.js file. You can press 'y' and press 'enter' to confirm. This will add a new entry inside the webpack config for the webpack html plugin.

This will also add an entry in the .yo-rc.json file.

## If you delete a page, please also remove the entry from the webpack config file to avoid errors***



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

Specify custom folder structure

```
$ yo yolo:module components/header
```

Produces:

```
src/_modules/components/header/header.pug
src/_modules/components/header/header.scss
src/_modules/components/header/header.js
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

### Data Files

If you want to load global data into your PUG templates, you can add JSON files in `src/_data` folder.

For example, add menu.json in `src/_data` folder:

```json
{
  "name": "Home",
  "link": "/",
  "category": "Page",
  "status": "Development"
}
```

And it will be added to the `site.data` object so it can be used like so:

```PUG
div
  h1= site.data.menu.name
```

Which outputs to:

```html
<div>
  <h1>Home</h1>
</div>
```


## Image Minification options

please visit the following link to learn more about image minification options. 

[Imagemin Webpack Plugin](https://github.com/Klathmon/imagemin-webpack-plugin)




## Getting To Know Yeoman
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Akhil Prasenan](www.decodez.net)


[npm-image]: https://badge.fury.io/js/generator-yolo.svg
[npm-url]: https://npmjs.org/package/generator-yolo
[travis-image]: https://travis-ci.org//generator-yolo.svg?branch=master
[travis-url]: https://travis-ci.org//generator-yolo
[daviddm-image]: https://david-dm.org//generator-yolo.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-yolo
