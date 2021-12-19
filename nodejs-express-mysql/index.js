const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: 'https://localhost:8081'
};

app.use(cors(corsOptions));

// parse request of content-type 'application/json'
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// simple route 

app.get('/', (req, res) => {
    res.json({message: 'Welcome to tadel application'})
})


//require("./app/routes/tutorial.routes.js")(app);
// const func = require("./app/routes/tutorial.routes.js");
// func(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})