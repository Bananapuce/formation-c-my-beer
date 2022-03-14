import { bool, node, string } from "prop-types";

import "./style.css";
import { Typography } from "@mui/material";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Typography variant="h1">Cmybeer</Typography>
      <Typography variant="h2">{title}</Typography>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
