/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styled from 'styled-components';

// --------------- Function ---------------
export default function BackToButton({ text = 'Back To List', href = '/' }) {
  return (
    <div>
      <Link href={href}>
        <BackButton_a>{text}</BackButton_a>
      </Link>
    </div>
  );
}

// --------------- Styled ---------------
const BackButton_a = styled.a`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 2rem;
  display: block;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  border: 1px solid var(--primary);
  cursor: pointer;
  color: var(--primary);
  margin-top: 2rem;
  &:hover {
    color: var(--blue);
    border: 1px solid var(--blue);
  }
`;
