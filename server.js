const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://chelss:Millertime@cluster0.eqoo8.mongodb.net/Registration?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const data = client.db("Registration").collection("reg_001");
  // perform actions on the collection object

  async function createReg(client, newReg) {
    const result = await client
      .db("Registration")
      .collection("reg_001")
      .insertOne(newReg);
    console.log(
      `New listing created with the following id: ${result.insertedId}`
    );
    // .then(
    //   newReg(client, {
    //     firstname: "George",
    //     lastname: "Washington",
    //     Address1: "234 Cherry St",
    //     Address2: "PO BOX 3",
    //     City: "Honest",
    //     State: "MO",
    //     Zip: "27564",
    //   });
    // )
  }
  client.close();
});

// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri =
//   "mongodb+srv://chelss:Millertime@cluster0.tdspp.mongodb.net/Registration";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client
//       .db("Registration")
//       .command({ ping: 1 })
//       .then(
//         client.db("Registration").insert({ user: "bob", email: "bob@home.com" })
//       );
//     console.log("Connected successfully to server");
//     // db.collection.insert({});
//     // client.db.collection.insert({ user: "bob", email: "bob@home.com" });
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// var express = require("express");
// var app = express();
// var path = require("path");
// var bodyParser = require("body-parser");
// var db;
// var MongoClient = require("mongodb").MongoClient;
// var mongoose = require("mongoose");
// var mongodb = require("mongodb");
// var bson = require("bson");
// var url =
//   "mongodb+srv://Chels:Columbus1492@cluster0.tdspp.mongodb.net/Registration";
// var port = 3100;
// var router = express.Router();

// var fetchRouter = require("./routes/registrationroute");
// app.use("/", fetchRouter);

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   MongoClient.collection("mongodb_insert", function (error, collection) {
//     if (error) throw error;
//     console.log("CONNECTED");
//     collection.insert(
//       {
//         key: "value",
//         key1: "value1",
//       },
//       { safe: true },
//       function (error, document) {
//         if (error) throw error;
//         console.log(document);
//       }
//     );
//   });
// else {
//   console.log("Database created!");
//   app.listen(3000);

// db.Registration.insertOne(
//   { firstname: "Jim" },
//   { lastname: "John" },
//   { Address1: "123" },
//   { Address2: "345" },
//   { City: "Lansing" },
//   { State: "FL" },
//   { ZIP: "12345" },
//   { Country: "US" },
//   {}
// );

// db.get("/Registration", function (req, res) {
//   db.collection("");
// });
// }
// });

// KEEP BELOW
// mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once("open", function () {
//   console.log("MongoDB connection established");
// });

// app.listen(port, function () {
//   console.log("Server is running on Port: " + port);
// });

// app.use("/", router);

// router.route("/Administration").post(function (req, res) {
//   FormData.insertOne(
//     [
//       { firstname: "Jim" },
//       { lastname: "John" },
//       { Address1: "123" },
//       { Address2: "345" },
//       { City: "Lansing" },
//       { State: "FL" },
//       { ZIP: "12345" },
//       { Country: "US" },
//     ],
//     function (err, result) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
// KEEP ABOVE

// app.use(bodyParser.json());

// app.get("/Administration", function (req, res) {
//   res.sendFile(path.join(__dirname, "/Registration.js"));
// });

// app.post("/Registration", function (req, res) {
//   // Insert JSON straight into MongoDB
//   console.log("Post going thru");
//   db.collection("registrants").insert(req.body, function (err, result) {
//     if (err) res.send("Error");
//     else res.send("Success");
//   });
// });
