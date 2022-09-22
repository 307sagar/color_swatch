
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ColorForm from "./colorForm";
import { useNavigate } from 'react-router-dom';

// Create color Component
const CreateColor = () => {
const history = useNavigate();
const [formValues, setFormValues] =
	useState({ type: '', red: '', green: '',blue: '', hue: '', saturation: '',lightness: ''});


// onSubmit handler
const onSubmit = colorObject => {
	axios.post(
'http://localhost:4000/colors/create-color',
	colorObject)
	.then((res) => {
		if (res.status === 200) {
		alert("Color successfully created");
		
		history('/color-list');
		} else Promise.reject();
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return Color form
return(
	<ColorForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Color Swatch
	</ColorForm>
)
}

// Export Create color Component
export default CreateColor
