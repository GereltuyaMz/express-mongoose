import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link as RouterLink } from "react-router-dom";
import { Button, Stack, Typography, Link } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const StateBtn = ({ params }) => {
	const [deleted, setDeleted] = useState(false);
	const url = "http://localhost:8001/category?id=";
	const deleteUser = (id) => {
		console.log("params ", params);
		console.log("id", id);
		axios
			.delete(url + id)
			.then(() => {
				toast.success("Амжилттай устгалаа");
				// setDeleted(true);
			})
			.catch((err) => {
				console.log(err);
				toast.error("Алдаа гарлаа");
			});
	};

	const editCategory = (id) => {
		axios
			.put(url + id, {
				name: params.row.name,
				slug: params.row.slug,
				imgUrl: params.row.imgUrl,
			})
			.then(() => {
				toast.success("Амжилттай update");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Алдаа гарлаа");
			});
	};

	return (
		<Stack direction="row" gap={1}>
			<Button
				variant="contained"
				size="small"
				onClick={() => editCategory(params.row.id)}
			>
				Edit
			</Button>
			<Button
				variant="contained"
				size="small"
				onClick={() => deleteUser(params.row.id)}
			>
				Delete
			</Button>
		</Stack>
	);
};

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "name", headerName: "Category name", width: 130, editable: true },
	{ field: "slug", headerName: "Slug", width: 130, editable: true },
	{
		field: "imgUrl",
		headerName: "Img url",
		width: 90,
		editable: true,
	},
	// {
	// 	field: "fullName",
	// 	headerName: "Full name",
	// 	description: "This column has a value getter and is not sortable.",
	// 	sortable: false,
	// 	width: 160,
	// 	valueGetter: (params) =>
	// 		`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	// },
	{
		field: "actions",
		headerName: "Actions",
		sortable: false,
		width: 180,
		renderCell: (params) => <StateBtn params={params} />,
	},
];

const Category = () => {
	const [data, setData] = useState([]);
	const url = "http://localhost:8001/categories";

	const getCategories = () => {
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
		getCategories();
	}, [data]);

	return (
		<>
			<Typography variant="h4" gutterBottom>
				Category
			</Typography>
			<Stack direction={"row"} justifyContent="space-between" marginBottom={3}>
				<Link component={RouterLink} to="/adduser" underline="none">
					<Button variant="contained">NEW</Button>
				</Link>
				<Button variant="contained">ADD FILTER</Button>
			</Stack>
			{/* User table */}
			<div style={{ height: 400, width: "700px" }}>
				<DataGrid
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

export default Category;
