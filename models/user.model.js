const DB = require('../utils/db');
const bcrypt = require('bcrypt');

class User {
    userId;
    firstName;
    lastName;
    email;
    password;

    address;


    constructor(userId, firstName, lastName, email, password) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }


    static async InsertUser(firstName, lastName, email, password, phone, address, role, smoke, img, isActive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = await bcrypt.hash(password, 10);
        this.phone = phone;
        this.address = address;
        this.role = role;
        this.smoke = smoke;
        this.img = img;
        this.isActive = isActive;

        return await new DB().InsertUser('Users', { ...this });

    }
}



