/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styled from 'styled-components';
export default function Header() {
  return (
    <HeaderStyle>
      <Link href='/'>
        <Logo_a>Blanc</Logo_a>
      </Link>
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
  box-shadow: 0 5px 10px var(--subprimary);
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--white);
`;

const Logo_a = styled.a`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: var(--primary);
  cursor: pointer;
`;
