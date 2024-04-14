const { MongoClient } = require('mongodb');

const url = "mongodb+srv://Maria:7rwlNAzP9skq6GXm@cluster0.huney3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("MajuStudents");
    const collection = db.collection("students");
    const myobj = { name: "Maria Asad", degree: "BSCS", semester: "5th", gpa: 3.5 };
    return collection.insertOne(myobj)
      .then(result => {
        console.log("1 document inserted");
        client.close();
      })
      .catch(error => {
        console.error("Insert operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
