import styled from 'styled-components';
import { Medias } from '../../styles/Media';
import Container from '../layouts/Container';
import TagItem from './TagItem';
// --------------- function ---------------
export default function TagList() {
  return (
    <Container>
      <TagList_ul>
        <TagItem name='next' href='/images/nextjs.svg' />
        <TagItem name='react' href='/images/react.svg' />
      </TagList_ul>
    </Container>
  );
}
// --------------- Styled ---------------
const TagList_ul = styled.ul`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: fixed;
  right: 2rem;
  top: 10rem;
  z-index: 10;
  ${Medias.sp} {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    top: 7rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
