import * as React from "react";
import { createTheme, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Header from "./components/layouts/HeaderLayout/HeaderLayout";
import Menu from "./components/layouts/MenuLayout";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import { Link, Navigate, Route, RouteProps, Routes } from "react-router-dom";
import StockPage from "./components/pages/StockPage/StockPage";
import StockCreatePage from "./components/pages/StockCreatePage/StockCreatePage";
import StockEditPage from "./components/pages/StockEditPage/StockEditPage";
import ReportPage from "./components/pages/ReportPage/ReportPage";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import { ThemeProvider } from "@emotion/react";
import { green } from "@mui/material/colors";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundImage:
              "url(" +
              `${process.env.PUBLIC_URL}/images/background_menu.jpg` +
              ")",
            width: drawerWidth,
          },
        },
      },
    },
    typography: {
      fontFamily: "Noto Sans Thai",
    },
    spacing: 8,
    palette: {
      primary: green,
      background: {
        default: "#CFD2D6",
      },
    },
  });
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {false && <Header open={open} onDrawerOpen={handleDrawerOpen} />}
        {false && <Menu open={open} onDrawerClose={handleDrawerClose} />}
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/stock" element={<StockPage />} />
            <Route path="/stock/create" element={<StockCreatePage />} />
            <Route path="/stock/edit/:id" element={<StockEditPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </Box>
    </ThemeProvider>
  );
}

const NotFound = () => (
  <div>
    <h1> 404 File Not Found </h1>
    <Link to="/"> Back To Home </Link>
  </div>
);
