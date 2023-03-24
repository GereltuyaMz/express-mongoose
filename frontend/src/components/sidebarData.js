import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const sidebarData = [
  { title: "Profile", path: "/profile", icon: <AccountBoxIcon /> },
  { title: "Dashboard", path: "/", icon: <HomeIcon /> },
  { title: "Category", path: "/category", icon: <CategoryIcon /> },
  { title: "Product", path: "/product", icon: <ShoppingCartIcon /> },
  { title: "User", path: "/user", icon: <PersonIcon /> },
  { title: "Sign up", path: "/signup", icon: <PersonAddIcon /> },
]
