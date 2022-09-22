const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let colorSchema = new Schema({
type: {
	type: String
},
red: {
	type: Number
},
green: {
	type: Number
},
blue: {
	type: Number
},
hue: {
	type: Number
},
saturation: {
	type: Number
},
lightness: {
	type: Number
}
}, {
	collection: 'colors'
})

module.exports = mongoose.model('Color', colorSchema)
