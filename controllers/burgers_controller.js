const express = require("express");
const db = require("../models");

const router = express.Router();

router.post("/burger", (req, res) => {
    db.Burger.create({ burger_name: req.body.name }).then(() => res.redirect("/"))
});

router.put("/burger/:id", (req, res) => {
	console.log("This is req.body")
	console.log(req.body)
    db.Burger.update({ 
    	devoured: true,
    	CustomerId: req.body.customer
    }, {
        where: { id: req.params.id }
    }).then(() => res.redirect("/"))
});

router.delete("/burger/:id", (req, res) => {
    db.Burger.destroy({
        where: { id: req.params.id }
    }).then(() => res.redirect("/"))
})

module.exports = router;