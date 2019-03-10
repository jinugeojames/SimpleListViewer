# BETTERPLACE Placement Task

<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

This is a simple node.js application which makes use of express.js , mangoose, handlebars to give a basic movie rating website.

## Pre Requisites

``
node.js > 8.0
mongoDB
``

## How to install

Unzip the repo and from the root directory. Start mongoDb at the default endpoint at 'mongodb://localhost:27017'

```
npm install
node app.js
```
You can change the port in the app.js file to your choice.
The application will be available in the browser by default localhost:3000.

## Directory structure
```
.
├── app.js
├── bin
│   └── www
├── data
│   └── data.csv
├── models
│   └── data.js
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   ├── propeller
│   │   ├── css
│   │   ├── fonts
│   │   └── js
│   └── stylesheets
│       └── style.css
├── readme.md
├── routes
│   └── index.js
└── views
    ├── error.hbs
    ├── index.hbs
    └── layout.hbs

```

## Points To Take Note 

- The csv file for data dump is in the data/data.csv file.
- When the application starts up first, it will automatically read from the csv file and creates a db in mongo importing all the data.
- The front end has pagination and also have a search option for searching based on the given query.
- You can click on each field name in the table so that it sorts the records on basis of that in ascending order.(It has some pending bugs to be fixed though)
- You can see the database imported from the csv file using atlas/ compass/ robomongo or even using the terminal.
