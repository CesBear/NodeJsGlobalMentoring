import { v4 as uuidv4 } from 'uuid';

export default class UserSchema {
    constructor(age, login, password, id = uuidv4()) {
        this.id = id;  
        this.age = age;              
        this.login = login;
        this.password = password;
        this.isDeleted = false;
    }
}
