const mongoose = require('mongoose');
const dbConnect = () => {
  mongoose.
  connect('mongodb+srv://demo_user:hello@cluster0.buygck8.mongodb.net/',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=> console.log('db connected')).
catch(err => console.log(err));
};

module.exports =dbConnect