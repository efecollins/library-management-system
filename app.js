const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
const repl = require('repl');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
const local = repl.start('$ ');

local.on('exit', () => {
    console.log('exiting repl')
    process.exit();
})

mongoose.connect("mongodb://localhost:27017/libraryDB", { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = {
    bookImage: String,
    bookTitle: String,
    bookURL: String
}

const Books = mongoose.model('Book', bookSchema);

const librarySchema = {
    fieldTitle: String,
    fieldColor: String,
    fieldBooks: [bookSchema]
}

const Fields = mongoose.model('Field', librarySchema);

app.get('/', (req, res) => {
    // fieldColor & fieldTitle set to '' to remove bug
    Fields.find({}, (err, foundFields) => {
        if(foundFields.length === 0) {
            res.render('home', {foundFields: foundFields, selectCreate: 'CREATED', _: _})
        } else {
            res.render('home', {foundFields: foundFields, selectCreate: 'SELECTED', _: _})
        }
    })
})

app.post('/', (req, res) => {
    const fieldTitle = _.startCase(req.body.fieldTitle);
    const field = new Fields({
        fieldTitle: fieldTitle,
        fieldColor: req.body.fieldColor
    })
    Fields.findOne({fieldTitle: fieldTitle}, (err, foundFieldTitle) => {
        if(foundFieldTitle) {
           res.redirect('/');
        } else {
            field.save();
            res.redirect('/');
        }
    })
})

app.get('/:fieldTitle', (req, res) => {
    console.log(req.params.fieldTitle);
})

app.listen(3000, () => {
    console.log('Server is live on port 3000');
})