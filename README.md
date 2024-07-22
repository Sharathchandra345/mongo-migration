# Simple MongoDB Migration Script

This project provides a Node.js script to migrate collections from the `test` database to the `production` database in a MongoDB cluster.

## Prerequisites

- Node.js installed on your machine.
- A MongoDB cluster with `test` and `production` databases.
- Feel free to rename the databases according to the requirement

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sharathchandra345/mongo-migration
   cd mongo-migration
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root of the project with the following content:

   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.c03sktv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

   Replace `<username>` and `<password>` with your MongoDB credentials.

4. **Update `.gitignore`:**

   Ensure `.env` is added to your `.gitignore` file to keep your credentials secure:

   ```plaintext
   .env
   ```

## Usage

To run the migration script, execute the following command:

```bash
node migrate.js
```

The script will connect to your MongoDB cluster, retrieve all collections from the `test` database, and insert the documents into the corresponding collections in the `production` database.

## Project Structure

- `migrate.js`: The main script to perform the migration.
- `.env`: File to store environment variables (MongoDB URI).
- `package.json`: Project metadata and dependencies.

## Dependencies

- `mongodb`: MongoDB driver for Node.js.
- `dotenv`: Module to load environment variables from a `.env` file.
