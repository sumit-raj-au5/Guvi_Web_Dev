const {MongoClient} = require('mongodb');
require('dotenv').config();

const mongo = {
    //DB String
    db:null,

    //collections
    user:null,

    async connect(){
        //database connection
        const client = new MongoClient(process.env.MONGODB_URL||"mongodb://localhost:27017");
        await client.connect();
        console.log(`MongoDB connected - ${process.env.MONGODB_URL}`);

        //selecting Database
        this.db = client.db(process.env.MONGODB_DBNAME);
        console.log(`Database selected - ${process.env.MONGODB_DBNAME}`);

        //initializing collections
        this.user = this.db.collection("user");
    }
}


module.exports=mongo;