import Link from 'next/link';
import styled from 'styled-components';
export default function Header() {
  return (
    <HeaderStyle>
      <Logo_p>Blanc</Logo_p>
      <NavItem_nav>
        <Link href='/'>
          <a>home</a>
        </Link>
        <Link href='/'>
          <a>about</a>
        </Link>
      </NavItem_nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavItem_nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  a {
    font-size: 16px;
    text-transform: uppercase;
  }
`;
const Logo_p = styled.p`
  font-size: 3rem;
  font-weight: 500;
`;
