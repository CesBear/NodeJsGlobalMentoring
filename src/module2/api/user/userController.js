import userDB from './userDB';
import msg from "./userErrorMessages";

module.exports = {
    
    create: (req, res) => {
        try {
            const userData = {
                age: req.body.age,
                login: req.body.login,
                password: req.body.password                
            };

            const newUser = userDB.create(userData);

            if (!newUser) {
                return res.status(500).json({ message: errorMessage() });
            }
            return res.status(201).send(newUser);
        } catch (error) {
            console.log(error);
        }
    },    
    update: (req, res) => {
        try {
            const user = userDB.update(req.params.id, req.body);

            if (!user) {
                return res.status(500).json({ message: msg.errorMessage() });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    },
    delete: (req, res) => {
        try {
            const response = userDB.delete(req.params.id);

            if (!response) {
                return res.status(500).json({ message: errorMessage() });
            }
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
        }
    },
    findUserById: (req, res) => {
        try {
            const user = userDB.findUserById(req.params.id);

            if (!user) {
                return res.status(404).json({ message: msg.userNotFound() });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    },
    findUserByLogin: (req, res) => {
        try {
            const user = userDB.findUserByLogin(req.params.login);

            if (!user) {
                return res.status(404).json({ message: msg.userNotFound() });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    },
    getAutoSuggestUsers: (req, res) => {
        try {
            const { loginSubstring, limit } = req.query;
            const users = userDB.getAutoSuggestUsers(loginSubstring, limit);

            if (!users) {
                return res.status(404).json({ message: msg.userNotFound() });
            }
            if (users.length === 0 ){
                return res.send({message: msg.usersEmpty()})
            }
            return res.status(200).json(users);
        } catch (error) {
            console.log(error);
        }
    },
    
};
