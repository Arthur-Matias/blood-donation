import IUser from "../models/User";
import User from "./UserController";

export default function Register(formData: IUser):void{
    const user = new User(formData);
}