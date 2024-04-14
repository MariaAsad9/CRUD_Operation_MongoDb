const { MongoClient } = require('mongodb');

const url = "mongodb+srv://Maria:7rwlNAzP9skq6GXm@cluster0.huney3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("MajuStudents");
    const collection = db.collection("students");
    return collection.find({}).toArray()
      .then(docs => {
        console.log("Documents retrieved:");
        console.log(docs);
        client.close();
      })
      .catch(error => {
        console.error("View operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
