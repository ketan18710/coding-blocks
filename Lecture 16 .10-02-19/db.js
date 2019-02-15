const mongodb = require(`mongodb`).MongoClient;
let dbuser = 'ketan';
let dbpassword = 'ketan18710';
let dbname = 'moviemaker';
let collection = '';
let url  = `mongodb://${dbuser}:${dbpassword}@ds127995.mlab.com:27995/moviemaker`

function connect() {
    mongodb.connect(url, function(err, client){
        if(err) throw err;
        let db = client.db(dbname);
        collection = db.collection('movies');
        // insertDoc();
        //console.log(db);
    })
}

function insertDoc(key,val){
   collection.insertMany([{key:val} ],function(err, result){
       if (err) throw err;
       console.log(result); 
   })
// asynchronous function
}

module.exports = {
    connect,
    insertDoc
}