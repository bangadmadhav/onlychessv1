import mongoose from "mongoose";

type connectionObject = {
    isConnected ?: number
}

const connection: connectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database", connection)
        return
    }
    
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {
            dbName: process.env.DB_NAME,
        })
        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Successfully");
        console.log(`🚀 Connected to MongoDB:`, await db.connections[0].db?.listCollections().toArray());
        
    } catch (error) {
        console.log("Database Connection failed", error)
        process.exit(1);

    }
}

export default dbConnect;