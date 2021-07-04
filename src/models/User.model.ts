import mongoose from "mongoose";
import { IUser } from "./interfaces/User.interface";

export default class User implements IUser{
    public _id: number = 0;
    public name: string = '';
    public email: string = '';
    public pass: any;
    
    public birthday: string;

    public idNumber: string = '';
    public postalCode: string = '';
    public country: string = '';
    public state: string = '';
    public city: string = '';
    
    public bloodType: string = '';

    public id: number = 0;
    public dateOfCreation: string;

    public disabled: boolean = false;
    /**
     * Creates new user (if no info where informed it creates a empty user obj by default)
     * @param user Receive an optional parameter with the user info
    */
    constructor(user?: User){
        this.dateOfCreation = new Date().toString();
        
        if(user){
            this.name = user.name;
            this.email = user.email;
            this.pass = user.pass;
            this.idNumber = user.idNumber;
            this.birthday = user.birthday;
            this.postalCode = user.postalCode;
            this.country = user.country;
            this.state = user.state;
            this.city = user.city;
            this.bloodType = user.bloodType;
        }else{
            this.birthday = new Date().toString();
        }
    }
}