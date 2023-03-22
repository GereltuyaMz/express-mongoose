import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link as RouterLink } from "react-router-dom";
import { Button, Stack, Typography, Link } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const StateBtn = ({ params }) => {
	const url = "http://localhost:8080/products/";

	const deleteProduct = (id) => {
		axios
			.delete(url + id)
			.then(() => {
				toast.success("Амжилттай устгалаа");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Алдаа гарлаа");
			});
	};

	return (
		<Stack direction="row" gap={1}>
			<Link
				component={RouterLink}
				to={`/editproduct/${params.row._id}`}
				state={params.row}
				underline="none"
			>
				<Button variant="contained" size="small">
					Edit
				</Button>
			</Link>
			<Button
				variant="contained"
				size="small"
				onClick={() => deleteProduct(params.row._id)}
			>
				Delete
			</Button>
		</Stack>
	);
};

const columns = [
	{
		field: "image",
		headerName: "Image",
		width: 150,
		height: 200,
		renderCell: (params) => (
			<img
				src={params.row.image}
				alt={params.row.title}
				style={{ width: 200 }}
			/>
		),
	},
	{ field: "title", headerName: "Product Title", width: 130, editable: true },
	{ field: "price", headerName: "Price", width: 90, editable: true },
	{
		field: "description",
		headerName: "Description",
		width: 130,
		editable: true,
	},
	{
		field: "rating",
		headerName: "Rating",
		width: 60,
		editable: true,
	},
	{
		field: "actions",
		headerName: "Actions",
		sortable: false,
		width: 180,
		renderCell: (params) => <StateBtn params={params} />,
	},
];

const Product = () => {
	const [data, setData] = useState([]);
	const url = "http://localhost:8080/products";

	const getProducts = () => {
		axios
			.get(url)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
				toast.error("error fetching data");
			});
	};

	useEffect(() => {
		getProducts();
	}, [data]);

	return (
		<>
			<Typography variant="h4" gutterBottom>
				Product
			</Typography>
			<Stack direction={"row"} justifyContent="space-between" marginBottom={3}>
				<Link component={RouterLink} to="/addproduct" underline="none">
					<Button variant="contained">NEW</Button>
				</Link>
			</Stack>
			<div style={{ height: 400, width: "700px" }}>
				<DataGrid
					getRowId={(row) => row._id}
					rows={data}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</>
	);
};

export default Product;
