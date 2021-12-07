let express = require('express');
let app = express();

let Datastore = require('nedb');
let db = new Datastore({filename: 'response.db'});
let db2 = new Datastore({filename: 'recipe.db'});
db.loadDatabase();
db2.loadDatabase();

app.use('/', express.static('public'));
app.listen(4000, ()=> {
    console.log('listening at local host 4000');
})

//parse JSON data
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));


//add a route on server that is listening for a post request
app.post('/chat', (request,response)=> {
    console.log(request.body);
    let currentDate = Date();
    let obj = {
        record: request.body
    }

        //insert travel data into the database
    db.insert(obj,(err,newDocs)=>{
        if(err){
            response.json({task:'task failed'});
        }else{
        console.log('new document inserted');
        response.json({task:"success"});
        }   
    })

});

