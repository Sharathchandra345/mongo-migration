require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function migrateCollections() {
  try {
    await client.connect();

    const testDb = client.db("test");
    const productionDb = client.db("production");

    const collections = await testDb.listCollections().toArray();

    for (const collection of collections) {
      const collectionName = collection.name;
      const testCollection = testDb.collection(collectionName);
      const productionCollection = productionDb.collection(collectionName);

      const documents = await testCollection.find().toArray();

      if (documents.length > 0) {
        await productionCollection.insertMany(documents);
        console.log(
          `Migrated ${documents.length} documents from ${collectionName} in test to production.`
        );
      } else {
        console.log(`No documents found in ${collectionName} in test.`);
      }
    }
  } catch (error) {
    console.error("Error during migration:", error);
  } finally {
    await client.close();
  }
}

migrateCollections();
