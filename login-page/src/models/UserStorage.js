"use strict";

class UserStorage{
    static #users = {
        id: ["hyejuChoi", "hyunjinO", "joonbuUni"],
        password: ["1111", "1111", "1234"],
        name:["최혜주","오현진","중부대"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
          if(users.hasOwnProperty(field)){
              newUsers[field] =users[field];
          }
          return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;