import styled from 'styled-components';
import { Medias } from './Media';
export const Body_section = styled.section`
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: var(--black);
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2.2rem;
  }
  p {
    font-size: 2rem;
    line-height: 2;
  }
  li {
    list-style: inside;
    font-size: 2rem;
  }
  a {
    color: var(--blue);
    &:hover {
      text-decoration: underline;
    }
  }
  code {
    margin: 1rem 0;
    font-size: 2rem;
  }
  ${Medias.sp} {
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.4rem;
    }
    li {
      list-style: inside;
      font-size: 1.2rem;
    }
    a {
      color: var(--blue);
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
