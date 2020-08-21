
module.exports = {

    userNotFound:  () => {
        return 'The user is not found in DB'
        },
    errorMessage:  () => {
       return 'Error! Our devs should be working on this soon'
    },
    usersEmpty: () => {
        return "No users found. Please make a POST to insert users"
    },
    userLoggedIn: () => {
        return 'That login is already in use'
    },
    userNotDeleted: () => {
        return 'That login is already in use'
    }

};