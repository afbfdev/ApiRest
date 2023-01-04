const mongoose = require('mongoose');

const UserSchema = new Schema({
    name : String,
    username: String,
    email : String,
    password : String
});

App.get('/', async (req,res) => {
    let user = req.head;
});

App.post('/addUsers', async (req,res) => {
    let user = req.body ;
});

App.put('/addUsers', async (req,res) => {
    let user = req.body ;
});

App.delete('', async (req,res) => {
    let user = req.body ;
});

const user = mongoose.model('user', UserSchema);
model.exports = user;
