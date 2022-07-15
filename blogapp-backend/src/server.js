const express = require("express");
const {MongoClient} = require('mongodb');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const withDB = async(operations, res) => {
    try{
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopologu: true,
        });
        const db = client.db("blogapp");
        await operations(db);
        client.close();
    }
    catch(error){
        res.status(500).json({message: 'error connecting to db', error});
    }   
};

app.get('api/articles/:name', async (req, res) => {
    withDB( async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(articleInfo)   
    }, res);
});

app.post('api/articles/:name/add-comments', (req, res) => {
    const {username, text} = req.body;
    const articleName = req.params.name;
    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({name: articleName},
            {$set: {
                comments: articleInfo.comments.concat({username, text}),
                },
            }
        );
        const updateArticleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(updateArticleInfo);
    }, res);
});

app.listen(8000, ()=> console.log("listening on port 8000"));