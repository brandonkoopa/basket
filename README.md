# Basket
- [Getting Started][getting-started]
    - [Requirements][reqs]
    - [Installation][install]
- [Find your way around][navigate]


This grocery to-do list adds your checked items to your virtual basket as emoji!

## Getting Started

### Requirements
- A modern browser
- [Node.js][node] (to build and run the example)

### Installation

**Prerequisites**
```sh
npm install -g gulp
```

**Build and run**
```sh
git clone https://github.com/brandonkoopa/basket
npm install
gulp
```
## Find your way around
Source files can be found in the `src` folder.
```
src/
    |__ components/
    |__ data/
    |__ img/
    |__ lib/
    |__ scss/
        |__ app.controller.js
        |__ app.module.js
        |__ index.html
        |__ route-config.js
```

[Gulp][gulp] copies, lints, compiles and watches files from `/src` into a `/www` folder to be served via Browsersync and refreshes when code changes for easy development.



[getting-started]: #getting-started
[reqs]: #requirements
[install]: #installation
[navigate]: #find-your-way-around
[use]: #use-in-your-own-project
[node]: http://www.nodejs.org
[gulp]: http://gulpjs.com/
