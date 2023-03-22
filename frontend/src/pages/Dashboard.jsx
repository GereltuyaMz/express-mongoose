import React from "react";
import { Box, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";

const Dashboard = () => {
	const breadcrumbs = [
		<Link
			component={RouterLink}
			underline="hover"
			key="1"
			color="inherit"
			to="/"
		>
			Dashboard
		</Link>,
		<Link
			component={RouterLink}
			underline="hover"
			key="2"
			color="inherit"
			to="/user"
		>
			User
		</Link>,
	];

	return (
		<Box>
			<Breadcrumbs separator="›" aria-label="breadcrumb">
				{breadcrumbs}
			</Breadcrumbs>
		</Box>
	);
};

export default Dashboard;
