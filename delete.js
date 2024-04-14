const { MongoClient } = require('mongodb');

const url = "mongodb+srv://Maria:7rwlNAzP9skq6GXm@cluster0.huney3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


MongoClient.connect(url)
  .then(client => {
    const db = client.db("MajuStudents");
    const collection = db.collection("students");
    const query = { name: "Maria Asad" }; // Query to find the document to delete
    return collection.deleteOne(query)
      .then(result => {
        console.log("1 document deleted");
        client.close();
      })
      .catch(error => {
        console.error("Delete operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
