
let dbconn=require('./dbconnection/mongo');

const StudentDetail=require('./models/studentDetail')
const studentAction = require('./controllers/studentAction')


const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World! MongoDB connected.');
});

//INSERT DATA
app.post('/student',studentAction.studentInsertData)

//------READ ALL----------
app.get('/student',studentAction.studentDataRead)

// --- LOGIN ROUTE ---
app.post('/login', studentAction.studentLogin);


//UPDATE BY EMAIL

app.put('/student/email/:email', studentAction.stdentUpdateDetails)




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});