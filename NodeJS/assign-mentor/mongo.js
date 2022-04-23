const {MongoClient} = require('mongodb')

require('dotenv').config()

const mongo = {
    //DB String
    db:null,

    //collections
    students:null,
    mentors:null,

    async connect() {
        //database connection
        const client = new MongoClient(process.env.MONGODB_URL);
        await client.connect();
        console.log(`MongoDB Connected ${process.env.MONGODB_URL}`);

        //selecting Database
        this.db = client.db(process.env.MONGODB_DBNAME);
        console.log(`Database Selected - ${process.env.MONGODB_DBNAME}`);

        //Initialize Collections
        this.students=this.db.collection('students');
        this.mentors=this.db.collection('mentors')
    }
}
module.exports=mongo;