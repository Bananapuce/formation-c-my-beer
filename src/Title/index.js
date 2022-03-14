import { node } from "prop-types";

export default function Title({ children }) {
  return <h1 className={className}>{children}</h1>;
}

Title.propTypes = {
  children: Node,
};
