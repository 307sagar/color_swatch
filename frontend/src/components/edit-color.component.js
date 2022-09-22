
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ColorForm from "./colorForm";
import { useParams, useNavigate } from 'react-router-dom';

// Edit color Component

const EditColor = (props) => {
const [formValues, setFormValues] = useState({
	type: "",
	red: "",
	green: "",
	blue: "",
	hue: "",
	saturation: "",
	lightness: "",
});
const { id } = useParams();
const history = useNavigate();
	
//onSubmit handler
const onSubmit = (colorObject) => {
	axios
	.get(
		"http://localhost:4000/colors/update-color/" +
		id,
		colorObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Color successfully updated");
		
		history("/color-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong in submitting form"));
};

// Load data from server and reinitialize color form
useEffect(() => {
	
	axios.get(
		"http://localhost:4000/colors/update-color/" +
			id
	)
	.then((res) => {
		const { type, red, green, blue,hue, saturation, lightness } = res.data;
		setFormValues({ type, red, green, blue,hue, saturation, lightness });
	})
	.catch((err) => alert("Something went Wrong in loading data from server"));
}, []);

// Return color form
return (
	<ColorForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Color Swatch
	</ColorForm>
);
};

// Export Edit color Component
export default EditColor;
