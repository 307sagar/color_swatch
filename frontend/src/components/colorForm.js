import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const ColorForm = (props) => {
const validationSchema = Yup.object().shape({
	type: Yup.string().required("Required"),
	red: Yup.number()
	.positive("Invalid red value")
	.integer("Invalid red value"),	
	green: Yup.number()
	.positive("Invalid green value")
	.integer("Invalid green value"),
	blue: Yup.number()
	.positive("Invalid blue value")
	.integer("Invalid blue value"),
	hue: Yup.number()
	.positive("Invalid hue value")
	.integer("Invalid hue value"),
	saturation: Yup.number()
	.positive("Invalid saturation value")
	.integer("Invalid saturation value"),
	lightness: Yup.number()
	.positive("Invalid lightness value")
	.integer("Invalid lightness value"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>Type *
			<Field name="type" type="text"
				className="form-control" />
			<ErrorMessage
			name="type"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup> Red
			<Field name="red" type="number"
				className="form-control" />
			<ErrorMessage
			name="red"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup> Green
			<Field name="green" type="number"
				className="form-control" />
			<ErrorMessage
			name="green"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup> Blue
			<Field name="blue" type="number"
				className="form-control" />
			<ErrorMessage
			name="blue"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup> Hue
			<Field name="hue" type="number"
				className="form-control" />
			<ErrorMessage
			name="hue"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup> Saturation
			<Field name="saturation" type="number"
				className="form-control" />
			<ErrorMessage
			name="saturation"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup> Lightness
			<Field name="lightness" type="number"
				className="form-control" />
			<ErrorMessage
			name="lightness"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default ColorForm;
