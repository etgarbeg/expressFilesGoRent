const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: './utils/.env' });


class DB {
    //mongo link
    db_uri;
    //my db
    db_name;
    //mongo db
    client;

    constructor() {
        this.db_uri = process.env.DB_URI;
        this.db_name = process.env.DB_NAME;
        this.client = new MongoClient(this.db_uri, { useUnifiedTopology: true });
        this.connect();
    }
    //npm run dev (development)


    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to the database');
        } catch (error) {
            console.error('Failed to connect to the database:', error);
        }
    }
    //doc- elemnt 
    async InsertUser(collection, doc) {
        try {
            //open 
            await this.client.connect();
            //insertion this elemnt to the collection
            return await this.client.db(this.db_name).collection(collection).insertOne(doc);
        } catch (error) {
            throw error;
        }
        finally {
            //close (important to each function )
            await this.client.close();
        }

    }

}

