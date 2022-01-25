// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/contactform');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'check' });
// kitty.save().then(() => console.log('database connected successfully!'));


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contactform');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contactform');

mongoose.connection.once('open', function(){
    console.log('connection has been made, now make fireworks....');
}).on('error', function(error){
    console.log('connection error:', error);
});