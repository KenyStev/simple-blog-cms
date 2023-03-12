import styled from "styled-components";
import { NavLink } from "../atoms/NavLink";

const Container = styled.div`
  display: flex;
  padding: 0 1rem;
`;

export const NavigationBar = ({ routes }) => (
  <Container>
    {routes.map((item) => (
      <NavLink key={item.href} href={item.href}>
        {item.text}
      </NavLink>
    ))}
  </Container>
);
