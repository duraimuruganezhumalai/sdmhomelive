const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactform');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'check' });
kitty.save().then(() => console.log('fine'));
// getting-started.js
