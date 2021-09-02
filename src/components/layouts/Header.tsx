/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
interface HeaderProps {
  scroll: number;
}
export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderStyle>
      <Link href='/'>
        <Logo_a>Blanc</Logo_a>
      </Link>
      <p>{scrollY}</p>
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
  z-index: 999;
`;

const Logo_a = styled.a`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: var(--primary);
  cursor: pointer;
`;
