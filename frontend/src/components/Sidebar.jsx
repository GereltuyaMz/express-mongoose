import { Link as RouterLink } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import {
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemText,
	Link,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { sidebarData } from "./sidebarData";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export function Sidebar({ open }) {
	return (
		<Drawer variant="permanent" open={open}>
			<DrawerHeader />
			<List>
				{sidebarData.map((text, index) => (
					<ListItem key={index} disablePadding sx={{ display: "block" }}>
						<Link
							component={RouterLink}
							to={text.path}
							underline="none"
							color={"black"}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									{text.icon}
								</ListItemIcon>
								<ListItemText
									primary={text.title}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
			<Divider />
		</Drawer>
	);
}
