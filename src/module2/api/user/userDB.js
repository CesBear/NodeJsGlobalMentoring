import UserSchema from './userModel';

let userList = [];

module.exports = {
    
    create({ age, login, password }) {
        let lastUserState = userList.length;
        userList = [...userList, new UserSchema(age,login,password)];

        return (userList.length === lastUserState) ? null : userList[userList.length - 1];
    },
    update(userId, { age, login, password  }) {
        let index = userList.findIndex(user => {
            return (user.id === userId && !user.isDeleted) ? user : null;
        });

        return (index < 0) ? null : userList[index] = { ...userList[index], age, login, password };
    },
    delete(userId) {
        let index = userList.findIndex(user => {
            return (user.id === userId && !user.isDeleted) ? user : null;
        });
        return (index < 0) ? null: userList[index] = { ...userList[index], isDeleted: true };;
     },
    findUserById(userId) {
        let index = userList.findIndex(user => {
            return (user.id === userId && !user.isDeleted) ? user : null;
        });

        return  (index < 0) ? null : userList[index];
    },    
    findUserByLogin(login) {
        let index = userList.findIndex(user => {
            return (user.login === login && !user.isDeleted) ? user : null;
        });

        return (index < 0) ? null :  userList[index];
    },
    getAutoSuggestUsers(loginSubstring = '', limit = userList.length) {
        return userList.filter(user => user.login.includes(loginSubstring) &&! user.isDeleted)
                    .slice(0, limit)
                    .sort((a, b) => a.login.localeCompare(b.login));
    }

};
