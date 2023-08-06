//server

const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');

//כניסה וחיבור מידע ושרת

mongoose.connect("mongodb+srv://etgarbegerano:CWbEw83ISVyqqJdX@cluster0.yutc1nn.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });


app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

//// הגדרת תבנית לאובייקט 'משתמש' 
const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    country: String,
    city: String,
    street: String
});

app.use(express.json()); // שינוי למבנה הרצוי -json