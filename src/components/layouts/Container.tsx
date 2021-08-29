import styled from 'styled-components';

export default function Container({ children }: { children: React.ReactNode }) {
  return <Container_div>{children}</Container_div>;
}

const Container_div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
