const mongodb = require(`mongodb`).MongoClient;
let dbuser = 'ketan';
let dbpassword = 'ketan18710';
let dbname = 'taklist';
let collection = 'tasks';
let url  = `mongodb://${dbuser}:${dbpassword}@ds011278.mlab.com:11278/taklist`

function connect() {
    mongodb.connect(url, function(err, client){
        if(err) throw err;
        let db = client.db(dbname);
        collection = db.collection('tasks');
        // insertDoc();
        //console.log(db);
    })
}

function insertDoc(data){
   collection.insertOne(data,function(err, result){
       if (err) throw err;
       console.log(result); 
   })

}

module.exports = {
    connect,
    insertDoc
}