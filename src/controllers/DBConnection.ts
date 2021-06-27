import  { Schema, Model, model, Mongoose } from 'mongoose';
import "dotenv/config";

let PASSWORD = process.env.PASS;

export interface IDBConnection {
    _id: number;
}

class DBConnection<T> {
    private _target:T;
    private _dbName: string;
    private _schema: Schema<T>;
    private _model: Model<T>;
    public constructor(dbName: string, target:T){
        this._target = target;
        this._dbName = dbName;
        this._schema = new Schema(this._target);
        this._model = new Model(model(this._dbName, this._schema));
    }
    /**
     * Return the DB entry with the corresponding ID
     * @param _id id of item to retrieve
     * @param cb callback function to execute after the Item retrieve
     */
    public async getItemByID(_id: number, cb:void)  {
        await this._model.findOne({_id: _id} as any, cb);
    }
    /**
     * Remove DB entry by item's ID
     * @param _id ID of the item to be removed
     */
    public async removeItemByID(id: number){
        await this._model.findByIdAndDelete(id);
    }
    public async UpdateItemByID(id:number, item: T):Promise<T>{
        return await this._model.findByIdAndUpdate(id, item) as T;
    }
    /**
     * Add new object to the database
     * @param item object for database register
     */
    public addItem(item: T){
        this._schema.add(item);
    }
    public ClearDatabase(password: string){
        if (password === PASSWORD) {
            this._model.remove({})
            return;
        };
        throw new Error("Wrong Password");
    }
}

export default DBConnection;
