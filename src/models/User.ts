import mongoose from "mongoose";

export default interface IUser extends mongoose.Schema{
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
}