import userDB from './userDB';
import msg from "./userErrorMessages";

module.exports = {
    
    create: (req, res) => {
        try {
            let userPayload = {
                age: req.body.age,
                login: req.body.login,
                password: req.body.password                
            };
            let newUser = userDB.create(userPayload);
            return res.status(201).send(newUser);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: msg.errorMessage() });
        }
    },    
    update: (req, res) => {
        try {
            let user = userDB.update(req.params.id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: msg.errorMessage() });            
        }
    },
    delete: (req, res) => {
        try {
            let response = userDB.delete(req.params.id);
            return res.status(200).send(response);
        } catch (error) {            
            console.log(error);
            return res.status(500).json({ message: msg.errorMessage() });
        }
    },
    findUserByLogin: (req, res) => {
        try {
            let user = userDB.findUserByLogin(req.params.login);
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: msg.userNotFound() });
        }
    },
    findUserById: (req, res) => {
        try {
            let user = userDB.findUserById(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: msg.userNotFound() });
        }
    },
    getAutoSuggestUsers: (req, res) => {
        try {
            let { loginSubstring, limit } = req.query;
            let users = userDB.getAutoSuggestUsers(loginSubstring, limit);
            if (users.length === 0 ){
                return res.send({message: msg.usersEmpty()})
            }
            return res.status(200).json(users);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: msg.userNotFound() });
        }
    },    
};
