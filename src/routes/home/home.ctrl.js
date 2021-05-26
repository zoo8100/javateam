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
    login: async (req, res) => {
       const user = new User(req.body);
       const response = await user.login();
      return res.json(response);
    },
       register: async (req, res) => {
      const user = new User(req.body);
      const response = await user.register();
      return res.json(response);
    },
};

module.exports ={
  output,
  process
};