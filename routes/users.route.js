//create new user.(object)
const UserModel = require('../models/user.model');
const UsersRoutes = require('express').Router();


//insert user
UsersRoutes.put('/Register', async (req, res) => {
    try {
        console.log('regi :>> ');
        //register cretiria 
        let { firstName, lastName, email, password, country, city, adress } = req.body;
        let data = await UserModel.InsertUser(firstName, lastName, email, password, country, city, adress);
        console.log('data :>> ', data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }



})