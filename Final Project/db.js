const mongodb = require(`mongodb`).MongoClient;
let dbuser = 'ketan';
let dbpass = `verma968`;
let dbname = "event_generator";
let collection = 'event_data';
let url = `mongodb://${dbuser}:${dbpass}@ds143573.mlab.com:43573/event_generator`
function connect(cb) {
    mongodb.connect(url, function(err, client){
        if (err) throw err;
        let db = client.db(dbname);
         collection = db.collection('event_data');
        // insertDoc();
        //console.log(db);
        cb();
    })
}
function insertDoc(data){
    collection.insertOne(data,(err,result)=>{
        if (err) throw err
        console.log(result);
    })
}
module.exports={
    connect,insertDoc
}
