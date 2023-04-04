const express = require('express'); // import the express package
const cors = require('cors'); // import the cors package
const mysql = require('mysql2'); // import the mysql2 package
const app = express(); // create an instance of the express app

app.use(express.json()); // tell the app to use JSON for request and response bodies
app.use(cors()); // enable Cross-Origin Resource Sharing (CORS)

// ESTABLISH DATABASE CONNECTION

const db = mysql.createConnection({ // create a database connection using mysql2
  host: "127.0.0.1", // specify the host for the database
  user: 'root', // specify the user for the database
  password: "password", // specify the password for the database
  database: 'ecomv2', // specify the database to connect to
  // try other name like products 
});

db.connect(err => { // connect to the database
  if (err) { // if there is an error
    console.log(err.message); // log the error message
    return; // exit the function
  }
  console.log("Connected to MySQL database"); // if successful, log a success message
});

// HANDLE API ENDPOINTS

app.get("/products", (req, res) => { // handle GET requests to the "/products" endpoint
  const q = "SELECT * FROM products"; // define a SQL query to select all rows from the "products" table
  db.query(q, (err, data) => { // execute the query using the database connection
    if (err) { // if there is an error
      console.log(err); // log the error
      return res.json(err); // return the error message as a JSON response
    }
    return res.json(data); // otherwise, return the query results as a JSON response
  });
});

app.post("/products", (req, res) => { // handle POST requests to the "/products" endpoint
  const q = "INSERT INTO products(`name`, `price`, `description`, `image`) VALUES (?)"; // define a SQL query to insert a new row into the "products" table
  const values = [ // create an array of values for the new row
    req.body.name, // read the name from the request body
    req.body.price, // read the price from the request body
    req.body.description, // read the description from the request body
    req.body.image, // read the image from the request body
  ];
  db.query(q, [values], (err, data) => { // execute the query using the database connection
    if (err) return res.send(err); // if there is an error, send the error message as a response
    return res.json(data); // otherwise, return the query results as a JSON response
  });
});

app.listen(8800, () => { // start the app listening on port 8800
  console.log("Connected to backend.");
});


