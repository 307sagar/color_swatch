
let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Color Model
let colorSchema = require("../models/Color");

// CREATE Color
router.post("/create-color", (req, res, next) => {
colorSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Colors
router.get("/", (req, res) => {
colorSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE color
router
.route("/update-color/:id")
// Get Single Color
.get((req, res) => {
	colorSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Color Data
.put((req, res, next) => {
	colorSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Color updated successfully !");
		}
	}
	);
});

// Delete Color
router.delete("/delete-color/:id",
(req, res, next) => {
colorSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
