import { bool, node, string } from "prop-types";

import "./style.css";
import Title from "../Title";
import { Subtitle } from ".styles";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Title>Cmybeer</Title>
      <Subtitle isHome={isHome}>{title}</Subtitle>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
