const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
//const repl = require('repl');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
//const local = repl.start('$ ');

// local.on('exit', () => {
//     console.log('exiting repl')
//     process.exit();
// })

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = {
    bookImage: String,
    bookTitle: String,
    bookURL: String,
    bookField: String
}

const Books = mongoose.model('Book', bookSchema);

const librarySchema = {
    fieldTitle: String,
    fieldColor: String,
    fieldBooks: [bookSchema]
}

const Fields = mongoose.model('Field', librarySchema);

app.get('/', (req, res) => {
    Fields.find({}, (err, foundFields) => {
        if (foundFields.length === 0) {
            res.render('home', { foundFields: foundFields, selectCreate: 'CREATED', _: _, bookField: 'FIELD' })
        } else {
            res.render('home', { foundFields: foundFields, selectCreate: 'SELECTED', _: _, bookField: 'FIELD' })
        }
    })
})

app.post('/', (req, res) => {
    const fieldTitle = _.startCase(req.body.fieldTitle);
    const field = new Fields({
        fieldTitle: fieldTitle,
        fieldColor: req.body.fieldColor
    })
    Fields.findOne({ fieldTitle: fieldTitle }, (err, foundFieldTitle) => {
        if (foundFieldTitle) {
            res.redirect('/');
        } else {
            field.save();
            res.redirect('/');
        }
    })
})

app.get('/:fieldTitle', (req, res) => {
    const fieldTitle = _.startCase(req.params.fieldTitle);

    Fields.find({}, (err, foundFields) => {
        res.render('book', { foundFields: foundFields, _: _, fieldTitle: fieldTitle })
    })
})

app.post('/addBook', (req, res) => {
    let fieldTitle = req.body.fieldTitle
    const newBook = new Books({
        bookImage: req.body.bookImage,
        bookTitle: req.body.bookTitle,
        bookURL: req.body.bookURL,
        bookField: fieldTitle
    })
    newBook.save();

    Fields.updateOne({ fieldTitle: fieldTitle }, { $push: { fieldBooks: [newBook] } }, { upsert: true, new: true }, (err) => {
        if (err) {
            res.redirect('/')
        } else {
            fieldTitle = _.lowerCase(fieldTitle);
            res.redirect('/' + fieldTitle);
        }
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is live on port 3000');
})