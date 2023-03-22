import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const EditProduct = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const [form, setForm] = useState({
		title: "",
		price: "",
		description: "",
		rating: "",
	});

	const [formData, setFormData] = useState([]);
	const url = "http://localhost:8080/products/";
	console.log("formtitle", form.price);
	const editProduct = (id) => {
		axios
			.put(url + id, { ...form })
			.then((res) => {
				setFormData(res.data);
				toast.success("Амжилттай нэмэгдлээ", {
					autoClose: 1000,
				});
				navigate("/product");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Алдаа гарлаа", {
					autoClose: 1000,
				});
			});
	};

	return (
		<Box>
			<Typography variant="h4" marginBottom={4}>
				Edit Product
			</Typography>
			<Box
				component="form"
				sx={{
					width: "500px",
					gap: 3,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<TextField
					label="Product title"
					variant="outlined"
					defaultValue={state.title}
					onChange={(e) => setForm({ ...form, title: e.target.value })}
				/>
				<TextField
					label="Price"
					variant="outlined"
					defaultValue={state.price}
					onChange={(e) => setForm({ ...form, price: e.target.value })}
				/>
				<TextField
					label="description"
					variant="outlined"
					defaultValue={state.description}
					onChange={(e) => setForm({ ...form, description: e.target.value })}
				/>
				<TextField
					label="rating"
					variant="outlined"
					defaultValue={state.rating}
					onChange={(e) => setForm({ ...form, rating: e.target.value })}
				/>
				<Button variant="contained" onClick={() => editProduct(state._id)}>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default EditProduct;
