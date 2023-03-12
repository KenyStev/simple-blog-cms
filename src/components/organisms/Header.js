import { SearchBar } from "../molecules/SearchBar";
import { Logo } from "../atoms/Logo";
import styled from "styled-components";
import { NavigationBar } from "../molecules/NavigationBar";

const HeaderStyled = styled.div`
  padding: 1rem;
  display: flex;
  position: sticky;
  top: 0;
  border-bottom: 1px solid teal;
  z-index: 1;
  background: white;
`;

const Nav = styled.div`
  flex: 1;
  display: flex;
  justify-content: stretch;
  align-items: flex-end;
`;

export const Header = () => (
  <HeaderStyled className='cms-header'>
    <Nav className='cms-nav'>
      <Logo src='https://w7.pngwing.com/pngs/265/349/png-transparent-blogger-computer-icons-logo-blogger-logo-icon-svg-miscellaneous-text-trademark.png' />
      <NavigationBar
        routes={[
          { href: "", text: "Home" },
          { href: "about", text: "About" },
          { href: "blog", text: "Blog" },
          { href: "contact", text: "Contact" },
        ]}
      />
    </Nav>
    <SearchBar label='Search the site' />
  </HeaderStyled>
);
