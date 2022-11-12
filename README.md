# Library-Management-System

I created this project because of the need to have my books on the web to have access to it anytime, anywhere.

Books are grouped by fields, for example a Mathematics field with Mathematics books.

## Technologies

Majorly, I used these tools because they are what I have a working knowlegde of.

 Moreover, Node.js with Express.js was selected because of the ease of server-client communication, MongoDB & Mongoose for JSON like Database Management Systems, EJS for literals & templating, Lodash & Bootstrap to cut down on development time, etc.

- NodeJS
- ExpressJS
- EJS
- JavaScript
- Lodash
- body-parser (npm)
- MongoDB
- Mongoose
- Bootstrap

## Installation

- Clone repository with the command `git clone <url>`
```
$ git clone https://github.com/efecollins/library-management-system.git
```

- Run `npm i` in your terminal to install `node_modules` and all dependencies in `package.json`
```
$ npm i
```
- Run `nodemon` in your terminal if installed to start the node server and watch for changes in `app.js`
```
$ nodemon
```

- Or run `node app.js` to start the server if `nodemon` is not installed
```
$ node app.js
```

- The following message should be logged to your console signifying success.

```
Server is live on port 3000
```

- To use MongoDB with Mongoose locally, do this:
```
mongoose.connect("mongodb://localhost:27017/libraryDB", {useNewUrlParser: true});
```

### **Coming Soon** & Challenges

The challenges I faced will be what will motivate the coming soon

- Delete books & fields.
- Upload book to website.
- Upload image for each books.

### Contributing Guides
- Every developer are welcomed to contribute to the project.

- Don't edit the schemas for any collections.

- Use Bootstrap 5.1.3

- Explain solved problem in pull requests.

### Credits

- Efosa Collins EVBOWE - [Twitter](https://twitter.com/EfeCollins7),  [Website](https://efecollins.github.io/new-pweb/dist), [Dev.to](https://dev.to/efecollins), [GitHub](https://github.com/efecollins)

- ExpressJS & NodeJS Handbooks - [The Valley of Code](https://thevalleyofcode.com/)