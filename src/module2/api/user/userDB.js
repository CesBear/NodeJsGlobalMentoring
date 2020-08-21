import UserSchema from './userModel';

let users = [];

module.exports = {
    

    create({ age, login, password }) {
        const previousUsersLength = users.length;
        users = [...users, new UserSchema(age,login, password)];

        if (users.length === previousUsersLength) return null;

        return users[users.length - 1];
    },
    update(userId, { age, login, password  }) {
        const userIndex = users.findIndex(user => {
            if (user.id === userId && !user.isDeleted) return user;
            return null;
        });

        if (userIndex < 0) return null;

        return users[userIndex] = { ...users[userIndex], age, login, password };
    },
    delete(userId) {
        const userIndex = users.findIndex(user => {
            if (user.id === userId && !user.isDeleted) return user;
            return null;
        });

        if (userIndex < 0) return null;
        users[userIndex] = { ...users[userIndex], isDeleted: true };

        return 'User was successfully deleted';
    },
    findUserById(userId) {
        const userIndex = users.findIndex(user => {
            if (user.id === userId && !user.isDeleted) return user;
            return null;
        });

        if (userIndex < 0) return null;

        return users[userIndex];
    },    
    findUserByLogin(login) {
        const userIndex = users.findIndex(user => {
            if (user.login === login && !user.isDeleted) return user;
            return null;
        });

        if (userIndex < 0) return null;

        return users[userIndex];
    },
    getAutoSuggestUsers(loginSubstring = '', limit = users.length) {
        return users.filter(user => !user.isDeleted && user.login.includes(loginSubstring))
                    .slice(0, limit)
                    .sort((a, b) => a.login.localeCompare(b.login));
    }

};
