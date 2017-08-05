const express = require("express");
const db = require("../models");

const router = express.Router();

router.post("/customer", (req, res) => {
    db.Customer.create({ customer_name: req.body.name }).then(() => res.redirect("/"))
});

router.delete("/customer/:id", (req, res) => {
    db.Customer.destroy({
        where: { id: req.params.id }
    }).then(() => res.redirect("/"))
})

module.exports = router;