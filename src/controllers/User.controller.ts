import User from "../models/User.model";
import DBConnection from "./DB.controller";

class UserController{
    private db:DBConnection;

    private constructor(){
        this.db = new DBConnection("users")
    }

    public static addNewUser(userInfo: User){
        new this().db.addNewItem(userInfo);
    }
    public static removeUser(user: User){
        new this().db.removeItem(user);
    }
    public static getUserByID(_id:number){
        new this().db.getItemByID(_id);
    }
    public static updateUserInfo(_id:number, userInfo: User){
        new this().db.updateItem(_id, userInfo);
    }
}

export default UserController;