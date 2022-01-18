const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactform');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'check' });
kitty.save().then(() => console.log('database connected successfully!'));
// getting-started.js


var app=express()
  
  
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/contact_form', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
  
    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('signup_success.html');
})
  
  
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('index.html');
}).listen(27017)
  
  
console.log("server listening at port 27017");