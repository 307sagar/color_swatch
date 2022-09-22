import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ColorTableRow from "./colorTableRow";

const ColorList = () => {
const [colors, setColors] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/colors/")
	.then(({ data }) => {
		setColors(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return colors.map((res, i) => {
	return <ColorTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Type</th>
			<th>Red</th>
			<th>Green</th>
			<th>Blue</th>
			<th>Hue</th>
			<th>Saturation</th>
			<th>Lightness</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ColorList;
