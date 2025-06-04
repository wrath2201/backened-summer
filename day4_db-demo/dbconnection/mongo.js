const mongoose=require('mongoose');

const db_url=`mongodb+srv://<user_id>:<password>.iadvoaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

console.log('connecting to DB:',db_url);

mongoose.connection.openUri(db_url);

// Event: Connected
mongoose.connection.on('connected', () => {  
  console.log('✅ Mongoose default connection open to:', db_url);
});                

// Event: Error
mongoose.connection.on('error', (err) => {  
  console.error('❌ Mongoose connection error:', err);
}); 

// Event: Disconnected
mongoose.connection.on('disconnected', () => {  
  console.warn('⚠️ Mongoose default connection disconnected'); 
});

// Event: On process end
process.on('SIGINT', () => {  
  mongoose.connection.close(() => { 
    console.warn('⚠️ Mongoose disconnected through app termination'); 
    process.exit(0); 
  }); 
});