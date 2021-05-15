"use strict";

const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage");

const output={

 home : (req, res) => {
        res.render("home/index");
    },
 login : (req, res) => {
        res.render("home/login");
    },
register: (req, res) => {
      res.render("home/register");
    },
  bestpd: (req, res) => {
    res.render("home/bestpd");
  },
  event: (req, res) => {
    res.render("home/event");
  },
  introduce: (req, res) => {
    res.render("home/introduce");
  },
  jin: (req, res) => {
    res.render("home/jin");
  },
  notice: (req, res) => {
    res.render("home/notice");
  },
}

const process = {
    login: (req, res) => {
       const user = new User(req.body);
       const response = user.login();
      return res.json(response);
    },
    register: (req, res) => {
      const user = new User(req.body);
      const response = user.register();
      return res.json(response);
    },
};

module.exports ={
  output,
  process
};