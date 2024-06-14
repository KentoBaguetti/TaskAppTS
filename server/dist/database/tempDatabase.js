"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasks = exports.getLeagues = exports.getUsers = void 0;
const db = {
    users: {
        messi: {
            name: "Lionel Messi",
            nationality: "Argentina",
            number: 10,
            goldenBalls: 8,
        },
        cr7: {
            name: "Cristiano Ronaldo",
            nationality: "Portugal",
            number: 7,
            goldenBalls: 5,
        },
        honda: {
            name: "Keisuke Honda",
            nationality: "Japan",
            number: 4,
            goldenBalls: 0,
        },
    },
    leagues: {
        spain: {
            name: "LaLiga",
        },
        england: {
            name: "English Premiere League",
        },
        germany: {
            name: "Bundesliga",
        },
        saudi: {
            name: "Saudi Pro League",
        },
    },
    tasks: {
        0: {
            header: "task1",
            author: "messi",
            body: "Wonderful wonderful wonderful, just how good is he",
        },
        1: {
            header: "task2",
            author: "cr7",
            body: "Medeira, Manchester, Madrid, Turin, and Manchester again. Vintage Cristiano.",
        },
    },
};
const getUsers = () => {
    return db.users;
};
exports.getUsers = getUsers;
const getUser = (username) => {
    const users = db.users;
    if (username in users) {
        return users[username];
    }
    else {
        return null;
    }
};
const getLeagues = () => {
    return db.leagues;
};
exports.getLeagues = getLeagues;
const getTasks = () => {
    return db.tasks;
};
exports.getTasks = getTasks;
console.log(getUser("messi"));
