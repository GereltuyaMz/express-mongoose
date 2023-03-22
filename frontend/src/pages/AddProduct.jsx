import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		title: "",
		price: "",
		description: "",
		rating: "",
	});

	const [formData, setFormData] = useState([]);
	const url = "http://localhost:8080/products";

	const addProduct = () => {
		axios
			.post(url, { ...form })
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
				Add Product
			</Typography>
			<Stack width={"800px"} gap={3}>
				<TextField
					label="Product title"
					variant="outlined"
					value={form.title}
					onChange={(e) => setForm({ ...form, title: e.target.value })}
				/>
				<TextField
					label="Price"
					variant="outlined"
					value={form.price}
					onChange={(e) => setForm({ ...form, price: e.target.value })}
				/>
				<TextField
					label="description"
					variant="outlined"
					value={form.description}
					onChange={(e) => setForm({ ...form, description: e.target.value })}
				/>
				<TextField
					label="rating"
					variant="outlined"
					value={form.rating}
					onChange={(e) => setForm({ ...form, rating: e.target.value })}
				/>
				<Button variant="contained" onClick={addProduct}>
					Save
				</Button>
			</Stack>
		</Box>
	);
};

export default AddProduct;
