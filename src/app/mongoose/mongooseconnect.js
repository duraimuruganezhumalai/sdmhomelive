// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/photoeffect",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("connection successful...."))
//     .catch((err) => console.log(err));




const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contact');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'userinput' });
// kitty.save().then(() => console.log('db connected successfully'));

//User

const User = mongoose.model('user', { name: String,mail: String,phone: Number });  //Modal

const user = new User({ name: 'Name', mail: 'mail', phone: 989898 });
user.save().then(() => console.log('User created successfully'));

User.find({}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs);
    }
});


