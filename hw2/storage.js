import utils from "./utils.js";

export default {
    userCollection: [],

    addUser(user) {
        this.userCollection.push(user);
    },
    findById(id) {
        return this.userCollection.find(user => {
            return user.id === id;
        })
    },
    getAutoSuggestUsers(loginSubstring, limit) {
        let suggested = this.userCollection.sort(utils.sortByName).filter(user => {
            return user.login.includes(loginSubstring);
        })

        if (limit) {
            return suggested.slice(0, limit);
        } else {
            return suggested;
        }
    }
}