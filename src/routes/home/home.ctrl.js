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
  logincustom : (req, res) => {
      res.render("home/logincustom");
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
  delivery: (req, res) => {
    res.render("home/delivery");
  },
  n1: (req, res) => {
    res.render("home/n1");
  },
  n2: (req, res) => {
    res.render("home/n2");
  },
  n3: (req, res) => {
    res.render("home/n3");
  },
  n4: (req, res) => {
    res.render("home/n4");
  },
  n5: (req, res) => {
    res.render("home/n5");
  },
  n6: (req, res) => {
    res.render("home/n6");
  },
  n7: (req, res) => {
    res.render("home/n7");
  },
  n8: (req, res) => {
    res.render("home/n8");
  },

}

const process = {
    logincustom: async (req, res) => {
       const user = new User(req.body);
       const response = await user.logincustom();
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