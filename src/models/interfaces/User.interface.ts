import IDBItem from "./DBItem.interface";

export interface IUser extends IDBItem{
    name: string;
    email: string;

    pass: {
        currPassword: string;
        oldPasswords: string[];
    }

    birthday: string;
    idNumber: string;
    postalCode: string;
    country: string;
    state: string;
    city: string;
    
    bloodType: string;
}