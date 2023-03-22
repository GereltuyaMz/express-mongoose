import { useState } from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

export const Layout = ({ children }) => {
	const [open, setOpen] = useState(false);

	return (
		<Box sx={{ display: "flex"}}>
			<Header open={open} setOpen={setOpen} />
			<Sidebar open={open} setOpen={setOpen} />
			<Box component="main" sx={{ p: 2 }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
};
