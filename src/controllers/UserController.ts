import IUser from "../models/User";
import IndexedDb from "./DBConnection";
import mongoose from "mongoose"
import DBConnection from "./DBConnection";
import crypto from "crypto"

class User extends mongoose.Schema implements IUser {
    name: string;
    email: string;
    password: string;
    birthday: Date;
    idNumber: string;
    postalCode: string;
    country: string;
    state: string;
    city: string;
    bloodType: string;
    db: DBConnection<IUser>;

    public constructor(user: IUser){
        super();
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.birthday = user.birthday;
        this.idNumber = user.idNumber;
        this.postalCode = user.postalCode;
        this.country = user.country;
        this.state = user.state;
        this.city = user.city;
        this.bloodType = user.bloodType;

        this.db = new DBConnection<IUser>("users", this);

        this.db.addItem(user);
    }

    public Delete(password:string){
        
    }
}

export default User;