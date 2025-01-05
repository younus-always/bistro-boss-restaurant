require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, CURSOR_FLAGS, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1aj11.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
      serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
      }
});

async function run() {
      try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();

            const database = client.db('bistroDB');
            const menuCollection = database.collection('menu');
            const reviewsCollection = database.collection('reviews');
            const cartsCollection = database.collection('carts');
            const userCollection = database.collection('users');

            // users related api
            app.post('/users', async (req, res) => {
                  const user = req.body;
                  // if user already exists
                  const query = { email: user.email };
                  const existingUser = await userCollection.findOne(query);
                  if (existingUser) {
                        return res.send({ message: 'already added' })
                  }
                  const result = await userCollection.insertOne(user);
                  res.send(result);
            });

            app.get('/users', async (req, res) => {
                  const result = await userCollection.find().toArray();
                  res.send(result);
            });

            app.get('/reviews', async (req, res) => {
                  const result = await reviewsCollection.find().toArray();
                  res.send(result);
            })

            app.get('/menu', async (req, res) => {
                  const result = await menuCollection.find().toArray();
                  res.send(result);
            });

            // cart related api
            app.post('/carts', async (req, res) => {
                  const cartItem = req.body;
                  const result = await cartsCollection.insertOne(cartItem);
                  res.send(result);
            });

            app.get('/carts', async (req, res) => {
                  const email = req.query.email;
                  const query = { email: email };
                  const result = await cartsCollection.find(query).toArray();
                  res.send(result);
            });

            app.delete('/carts/:id', async (req, res) => {
                  const id = req.params.id;
                  const query = { _id: new ObjectId(id) };
                  const result = await cartsCollection.deleteOne(query);
                  res.send(result);
            });



            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally { }
}
run().catch(console.dir);



app.get('/', (req, res) => {
      res.send("Bistro Boss Restaurant Server")
});

app.listen(port, () => {
      console.log(`Server running port ${port}`)
});