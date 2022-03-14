import { bool, node, string } from "prop-types";

import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";

import { Link } from "./styles";

export default function Screen() {
  const mainNavigation = [
    { path: "/", name: "Les bières" },
    { path: "/countdown", name: "Countdown" },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="h1">
            C my beer
          </Typography>
          <Box sx={{ display: "flex" }}>
            {mainNavigation.map(({ path, name }) => (
              <Link to="path" key={path}>
                {name}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}