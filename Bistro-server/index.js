require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, CURSOR_FLAGS, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());
const verifyToken = (req, res, next) => {
      if (!req.headers.authorization) {
            return res.status(401).send({ message: 'Unauthorized access' });
      }
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
            if (err) {
                  return res.status(401).send({ message: 'Unauthorized access' });
            }
            req.decoded = decoded;
            next();
      })
};



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


            //jwt related api
            app.post('/jwt', async (req, res) => {
                  const user = req.body;
                  const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: '1h' });
                  res.send({ token })
            });

            // user verify admin after verify token (Middleware)
            const verifyAdmin = async (req, res, next) => {
                  const email = req.decoded.email;
                  const query = { email: email };
                  const user = await userCollection.findOne(query);
                  const isAdmin = user?.role === 'admin';
                  if (!isAdmin) {
                        return res.status(403).send({ message: 'Forbidden access' });
                  }
                  next();
            };

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

            app.get('/users', verifyToken, verifyAdmin, async (req, res) => {
                  const result = await userCollection.find().toArray();
                  res.send(result);
            });

            app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
                  const id = req.params.id;
                  const filter = { _id: new ObjectId(id) };
                  const updatedUser = {
                        $set: {
                              role: 'admin'
                        }
                  };
                  const result = await userCollection.updateOne(filter, updatedUser);
                  res.send(result);
            });

            app.get('/user/admin/:email', verifyToken, async (req, res) => {
                  const email = req.params.email;
                  if (email !== req.decoded.email) {
                        return req.status(403).send({ message: 'Forbidden' });
                  }
                  const query = { email: email };
                  const user = await userCollection.findOne(query);
                  let admin = false;
                  if (user) {
                        admin = user?.role === 'admin';
                  }
                  res.send({ admin })
            })

            app.delete('/users/:id', verifyToken, verifyAdmin, async (req, res) => {
                  const id = req.params.id;
                  const query = { _id: new ObjectId(id) };
                  const result = await userCollection.deleteOne(query);
                  res.send(result);
            });

            // Reviews api
            app.get('/reviews', async (req, res) => {
                  const result = await reviewsCollection.find().toArray();
                  res.send(result);
            })

            // All Menu api
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