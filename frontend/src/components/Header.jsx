import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, Typography, IconButton, Avatar, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
}));

export const Header = ({ open, setOpen }) => {
	return (
		<AppBar position="fixed" open={open} sx={{ backgroundColor: "#536DFE" }}>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Stack direction={"row"} alignItems="center">
					<IconButton
						color="inherit"
						onClick={() => setOpen(!open)}
						edge="start"
						sx={{
							marginRight: 5,
						}}
					>
						{open ? <ArrowBackIcon /> : <MenuIcon />}
					</IconButton>
					<Typography variant="h6" noWrap>
						React admin full
					</Typography>
				</Stack>
				<Stack direction={"row"} alignItems="center">
					<Avatar sx={{ marginRight: 2, width: 30, height: 30 }}>H</Avatar>
					<Typography noWrap>Hi, Admin</Typography>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};
