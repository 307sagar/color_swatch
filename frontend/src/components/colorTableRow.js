import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ColorTableRow = (props) => {
const { _id, type, red, green, blue, hue, saturation, lightness } = props.obj;

const deleteColor = () => {
	axios
	.delete(
"http://localhost:4000/colors/delete-color/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Color successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{type}</td>
	<td>{red}</td>
	<td>{green}</td>
	<td>{blue}</td>
	<td>{hue}</td>
	<td>{saturation}</td>
	<td>{lightness}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-color/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteColor}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default ColorTableRow;
