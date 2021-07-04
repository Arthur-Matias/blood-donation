import "dotenv/config";
import IDBItem from '../models/interfaces/DBItem.interface';

const DBURL:string = process.env.DBURL || `mongodb://http://localhost:3939/api`; // To be implemented (test routes)
const PASSWORD:string = process.env.PASS || '';

/**
 * DBConnection<Type>
 * @param T the type to create the DB from
 * */
class DBConnection {
    private db: IDBDatabase;
    public dbName : string;
    private request: IDBOpenDBRequest;
    private transaction: IDBTransaction;

    constructor(dbName: string){
        console.log("Creating new DB connection ...");
        console.log("Connecting to "  + dbName);
        this.dbName = dbName;
        this.request = window.indexedDB.open(dbName);
        this.request.onerror = this.handleRequestError;
        this.request.onsuccess = this.handleRequestSuccess;
        this.db = this.request.result;
        this.transaction = this.db.transaction([dbName], "readwrite");
    }
    private handleRequestError(){
        alert("could not open Database, please, check if your browser supports IndexedDB");
    }
    private handleRequestSuccess(){
        console.log("DB opened successfully")
        
    }
    public addNewItem(item: IDBItem){
        console.log("Adding item = " + item);
        this.db.createObjectStore(this.dbName);
    }
    public updateItem(id: number, newItem: IDBItem){
        this.db.map(e=>{
            if (e._id === id && !e.disabled) {
                e = newItem
            }else if(e.disabled){
                throw new Error("The item you are trying to update is currently disabled");
            }
        })
    }
    public removeItem(item: IDBItem){
        this.db[this.db.indexOf(item)].disabled = true;
    }
    public getItemByID(_id:number){
        let item: ()=>IDBItem[] = ()=>{
            return this.db.filter(el=>{
                el._id === _id               
            })
        }
        return item;
    };
    public clearDatabase(pass: string){
        if(PASSWORD === pass){
            this.db = [];
        }
    }
}

export default DBConnection;
