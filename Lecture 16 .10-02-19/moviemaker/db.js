const mongodb = require(`mongodb`).MongoClient;
let dbuser = 'ketan';
let dbpassword = 'ketan18710';
let dbname = 'shopcart';
let collection = '';
let url  = `mongodb://${dbuser}:${dbpassword}@ds231589.mlab.com:31589/shopcart`

function connect() {
    mongodb.connect(url, function(err, client){
        if(err) throw err;
        let db = client.db(dbname);
        collection = db.collection('shopcart');
        // insertDoc();
        //console.log(db);
    })
}

function insertDoc(key,val){
   collection.insertMany([{key:val} ],function(err, result){
       if (err) throw err;
       console.log(result); 
   })

}

module.exports = {
    connect,
    insertDoc
}