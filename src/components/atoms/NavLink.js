import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  padding: 1rem 1rem 0 1rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;

  &:hover {
    color: gray;
  }
`;

export const NavLink = ({ children, href }) => (
  <StyledLink to={href}>{children}</StyledLink>
);
