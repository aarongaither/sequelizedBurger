const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
	let customers;
	db.Customer.findAll({}).then(customerRows => {
		customers = customerRows;
		db.Burger.findAll({
			include: [db.Customer]
		}).then(burgers => res.render("index", { burgers, customers }));
	})
    
});

module.exports = router;