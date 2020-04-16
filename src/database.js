const { connect } = require('mongoose');



const MONGODB_URI = `mongodb+srv://${process.env.MONGO_DB}:${process.env.MONGO_KEY}@cluster0-x2ibd.mongodb.net/test?retryWrites=true&w=majority`;

connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));